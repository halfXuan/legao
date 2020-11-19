let url_config =''
if(process.env.NODE_ENV === 'development'){
    // 开发环境
    // url_config = 'http://localhost:3030/'
	url_config = 'http://legao.lingwangmall.top/'
}else{
    // 生产环境
    url_config = 'http://legao.lingwangmall.top/'
}

export default url_config