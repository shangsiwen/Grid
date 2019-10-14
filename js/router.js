class Router {
    constructor(options) {
        const { routes, host } = options;
        this.routes = [];
        this.host = '';
        if (Array.isArray(routes)) {
            this.routes = routes;
        }
        if (typeof host === 'string') {
            this.host = host;
        }
    }


    joinPath() {
        const arr = [...arguments];
        return arr.join('/');
    }

    resolvePath(host, route) {
        if (route.path === '/') {
            route.path = this.joinPath(host, 'index.html');
        } else {

        }
    }

   initRoute(route) {
        let dir = '';
        if (!route.path) route.path = '';
        if (!route.title) route.title = route.path;
        if (!route.component) route.component = 'index.html';
        if (!route.dir) route.dir = '';
    }

    convertRoute(route, host) {

    }

    init(routes, host) {
        if (!routes.length) return;

        for (let i = 0; i < routes.length; i += 1) {
            const route = routes[i];
            this.initRoute(route);
            this.convertRoute(route, host);
        }
    }
}
window.router = new Router({
    routes: [
        {
            title: '首页',
            path: '/',
            dir: '/',
            component: 'index.html',
        },
        {
            title: 'grid-template-*',
            path: '/template',
            dir: 'template',            
            component: 'template.html',
            children: [
                {
                    title: 'a-1',
                    path: 'rows', // /template/rows
                    dir: 'template',                        
                    component: '', // 默认对应 index.html
                    children: [
                        {
                            title: 'a-1-1',                        
                            path: '',
                            dir: 'template',                        
                            component: '', // 默认对应 index.html
                        }
                    ]
                }
            ]
        }
    ],
    host: '/',
});