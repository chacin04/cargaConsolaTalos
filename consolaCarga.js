function loaderConsola (index,data){
    process.stdout.write(`\r [${(" ▮ ").repeat(Math.trunc((((index+1)*100)/data.length)/10))}${(' ▯ ').repeat(10-(Math.trunc((((index+1)*100)/data.length)/10)))} ] ${data.length} // ${index+1} // ${((((index+1)*100)/data.length)).toFixed(2)} %`)

}
export default loaderConsola