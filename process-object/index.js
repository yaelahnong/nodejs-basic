const initialMemoryUsage = process.memoryUsage().heapUsed;
const firstName = process.argv[2];
const lastName = process.argv[3];
const environment = process.env.NODE_ENV;

for(let i = 0; i <= 10000; i++) {
    // menaikan penggunaan memori
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai ${firstName} ${lastName}!`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);