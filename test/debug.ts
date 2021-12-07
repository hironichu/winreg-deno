import {Registry} from '../src/mod.ts';


console.log(`
-> Typeof ${typeof Registry}
-> FN list ${Object.getOwnPropertyNames(Registry)}
-> FN list ${Object.getOwnPropertyNames(Registry.prototype)}
`);


const newReg = new Registry({
	hive: 'HKCU',
	key: '\\Software\\Classes\\Discord',
});

console.info(`
Registered new Class
-> Typeof ${typeof newReg}
-> Method list ${Object.getOwnPropertyNames(newReg)}
`);

await newReg.get(Registry.DEFAULT_VALUE, (err, items) => {
	console.info('Error : ', err);
	console.info('Items : ', items);
})

// const test = newReg.values((_err, items) => {
// 	console.log(`Result for Values`, items)
// })



// console.info(`
// Called Method GET on Registry
// -> Typeof ${typeof test}
// -> Method list ${Object.getOwnPropertyNames(test)}
// `);