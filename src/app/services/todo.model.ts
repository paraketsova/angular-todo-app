export class Todo { 
    constructor(
        public title: string,
        public content: string,
        public completed: boolean = false
    ) {}
}