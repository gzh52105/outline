const globalMixin = {
    methods:{
        goBack(){
            // 返回：关闭当前webview
            const currentWebview = plus.webview.currentWebview();

            plus.webview.close( currentWebview);
        }
    }
}