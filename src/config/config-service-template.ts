export interface IEnvironmentVariable { 
    [k:string]: string | undefined;
}

export abstract class ConfigServiceTemplate {
    abstract createConfigOptions(): any;
    constructor (
        private env: IEnvironmentVariable,
    ) { }

    getConfigOptions(): any { 
        return this.createConfigOptions();
    }

    protected getValue(key: string, throwOnMissing = true): string {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${ key }`);
        }

        return value;
    }

    public ensureValues(keys: string[]) {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }

    public getPort() {
        return this.getValue('PORT', true);
    }

    public isProduction() {
        const mode = this.getValue('MODE', false);
        return mode != 'DEV';
    }
}