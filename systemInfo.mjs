import os from 'os';

const INFORMACION_SISTEMA = () => {
  const INFORMACION = {
    nombre: os.hostname(),
    tipo: os.type(),
    version: os.release(),
    arquitectura: os.arch(),
    CPUs: os.cpus()[0].model,
    memoriaTotal: `${os.totalmem() / (1024 * 1024)} MB`,
    memoriaLibre: `${os.freemem() / (1024 * 1024)} MB`,
  };
  console.log('Información del sistema =>');
  console.log(INFORMACION);
}

const INFORMACION_DE_RED = () => {
    const INTERFACES = os.networkInterfaces();
  
    console.log('Información de red =>');
    Object.entries(INTERFACES).forEach(([interfaceName, addresses]) => {
      console.log(`Interfaz: ${interfaceName}`);
      addresses.forEach((address) => {
        console.log(`Familia: ${address.family}`);
        console.log(`Dirección: ${address.address}`);
        console.log(`Interno: ${address.internal}`);
      });
    });
  }

export { INFORMACION_SISTEMA, INFORMACION_DE_RED };