import winston,{transports,format} from 'winston';

const logformat=format.printf(({level,message})=>{
    return `level:${level} message:${message}`;
})

export const getLoggerInstance= ()=>{
    const logger = winston.createLogger({
        level:'info',
        format:format.json(),
        transports:[
            new transports.Console({format:format.combine(format.colorize(),logformat)}),
        ]
    })
    return logger
}