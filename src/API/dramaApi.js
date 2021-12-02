import { ref, reactive } from "vue"
import { get } from "@/request/http.js"

export default{
    aa(){
        let b = ref('888');
        console.log(b);
        // console.log(99999999999999,get);
        return b;
    },

    // //查看剧本详情
    // getDaramInfo(){
    //     // get(`/v1/iist/scenario/get/0`).then(res => {
    //     //     console.log(res);
    //     //     return res
    //     // })
    //     console.log(get);
    //     return get
    // }
}