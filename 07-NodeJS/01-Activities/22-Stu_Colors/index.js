import colors from 'colors';

 const name =  process.argv[2];
 const profit = Number(process.argv[3]);

if (profit>0){

console.log(`my name is ${colors.bgYellow(name)} andI made ${colors.bgGreen(profit)} dollars this quarter.`);
}
else {
    console.log(`my name is ${colors.bgYellow(name)} andI made ${colors.bgBrightRed(profit)} dollars this quarter`);
};
