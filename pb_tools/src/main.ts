import * as child_process from 'child_process';
import * as UglifyJS from 'uglify-js';
import * as path from 'path';
import * as fs from 'fs';

function shell(cmd: string, args: string[]): Promise<string> {
    return new Promise((resolve, reject) => {
        cmd = cmd + " " + args.join(" ");
        child_process.exec(cmd, (err: child_process.ExecException | null, stdout: string, stderr: string) => {
            if (err) {
                console.error(stderr);
                reject(err);
            } else {
                console.log(stdout);
                resolve(stdout);
            }
        })
    });
}

export async function run(command: string, root?: string) {
    const filePath: string = root || '../protofile/';
    console.log(`开始查找protofile目录:${path.resolve(filePath)}`);
    const bundlesPath: string = './protobuf/bundles/';
    if (!fs.existsSync(bundlesPath)) {
        fs.mkdirSync(bundlesPath);
    }
    const files: string[] = fs.readdirSync(filePath);
    const protoFiles: string[] = [];
    const iLen: number = files.length;
    for (let i: number = 0; i < iLen; i++) {
        const file: string = files[i];
        if (file.match(/.+\.proto$/) != null) {
            console.log(`读取文件：${file}`);
            const protoFile: string = filePath + file;
            protoFiles.push(protoFile);
            const content: string = fs.readFileSync(protoFile, { encoding: 'utf-8' });
            if (content.match(/package ([A-Z]|[a-z]).+?;/) == null) {
                console.error(`${protoFile} 中必须包含 package 字段`);
                return;
            }
        }
    }
    const pbjs_temp_name: string = bundlesPath + 'temp.js';
    const pbjs_args = ['-t', 'static', '-p', bundlesPath, protoFiles.join(" "), '-o', pbjs_temp_name];
    await shell('pbjs', pbjs_args);
    const pbjs_content: string = fs.readFileSync(pbjs_temp_name, { encoding: 'utf-8' });
    const pbjs_final: string = 'var $protobuf = window.protobuf;\n$protobuf.roots.default=window;\n' + pbjs_content;
    const pbjs_file_name: string = bundlesPath + 'protobuf-bundles.js';
    fs.writeFileSync(pbjs_file_name, pbjs_final, { encoding: 'utf-8' });
    const pbjs_min = UglifyJS.minify(pbjs_final);
    const pbjs_min_name: string = pbjs_file_name.replace('.js', '.min.js');
    fs.writeFileSync(pbjs_min_name, pbjs_min.code, { encoding: 'utf-8' });
    await shell('pbts', ['--main', pbjs_file_name, '-o', pbjs_temp_name]);
    const pbts_temp_content: string = fs.readFileSync(pbjs_temp_name, 'utf-8');
    const pbts_content: string = 'type Long = protobuf.Long;\n' + pbts_temp_content.replace(/\$protobuf/gi, "protobuf").replace(/export namespace/gi, 'declare namespace');
    fs.writeFileSync(pbjs_file_name.replace(".js", ".d.ts"), pbts_content, 'utf-8');
    fs.unlinkSync(pbjs_temp_name);
    console.log(`文件导出完成`);
}


