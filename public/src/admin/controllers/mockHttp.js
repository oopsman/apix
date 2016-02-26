angular.module('auth').controller('MockHttpCtrl', MockHttpCtrl);

MockHttpCtrl.$inject = ['CommonService', 'MockService'];

function MockHttpCtrl(CommonService, MockService) {

    var vm = this;

    ////////////////////////// variables bind to view ///////////////////////////

    vm.formData = {};	// 页面数据

    // code-mirror 配置信息
    vm.cmOption = {
        theme: 'paraiso-dark',
        readOnly: true,
        mode: {name: "javascript", json: true}
    };

    // request params
    vm.formData.params = [{
        key: '',
        value: ''
    }];

    // request headers
    vm.formData.headers = [{
        key: '',
        value: ''
    }];

    // request body
    vm.formData.body = [{
        key: '',
        value: ''
    }];

    // 模拟请求的tab页
    vm.formData.tabs = [{
        name: 'Params'
    },{
        name: 'Headers'
    },{
        name: 'Body'
    }];

    // 初始tab页为params
    vm.formData.selectedTab = vm.formData.tabs[0];

    vm.selectTab = selectTab;	// 选择tab
    vm.add = add;	// 添加一条param
    vm.remove = remove;	// 删除一条param
    vm.send = send;	// 发送请求
    vm.formatResp = formatResp;	// 格式化response data

    ////////////////////////// functions bind to view ///////////////////////////

    function selectTab(tab) {
        vm.formData.selectedTab = tab;
    }

    function add(arr) {
        arr.push({
            key: '',
            value: ''
        })
    }

    function remove(arr, index) {
        if(arr.length > 1){
            arr.splice(index, 1);
        }
    }

    function formatResp() {
        vm.formData.output = CommonService.format(vm.formData.output);
    }

    ////////////////////////////// inner functions /////////////////////////////

}