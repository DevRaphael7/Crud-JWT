export class Time {

    public currentDate = () => `${new Date().getFullYear()}-${ this.formatDate(new Date().getMonth() + 1) }-${ this.formatDate(new Date().getDate()) }`

    public currentHour = () => `${ new Date().getHours()}:${ this.formatDate(new Date().getMinutes()) }:${ this.formatDate(new Date().getSeconds()) }`

    private formatDate = (data: number) => {
        let str: string = data.toString()

        for(let i = 0; i < 2; i++) {
            if(str[i] === undefined) {
                str = '0' + str
            }
        }

        return str
    }   
}