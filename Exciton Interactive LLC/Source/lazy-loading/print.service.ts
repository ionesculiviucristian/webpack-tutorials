export class PrintService {
    private static instance: PrintService;
    private static isCreating = false;

    constructor () {
        if (PrintService.isCreating === false) {
            throw new Error("You cannot call new to create PrintService instances. Call PrintService.getInstance() instead.");
        }
    }

    public static getInstance () {
        if (typeof PrintService.instance === "undefined" || PrintService.instance === null) {
            PrintService.isCreating = true;
            PrintService.instance = new PrintService();
            PrintService.isCreating = false;
        }

        return PrintService.instance;
    }

    public print = (message: string) => {
        import(
            /* webpackChunkName: "lazy-loading-print" */
            "./print"
            )
            .then((module) => {
                const print = module.default;
                print(message);
            });
    }
}