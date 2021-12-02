<template>

    <!-- 剧本管理 -->
    <div class="drama">
        <div class="drama-left">
            <ul class="drama-type">
                <li v-for="(item,index) in dramaList" :key="index" class="standard-box">
                    <div class="dramaImg"></div>
                    <div class="dramaData">
                        <p>{{ item.name }}</p>
                        <h3>{{ item.total }}</h3>
                    </div>
                </li>
            </ul>
            <div class="drama-list standard-box">
                <div class="_title">
                    <h3>剧本列表<span>共233条</span></h3>
                </div>
            </div>
        </div>
        <div class="drama-right standard-box"></div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';

// import test from '/src/Api/test.js';
export default {
    name: "Drama",
    setup() {
        let dramaList = reactive([
            {name:'剧本总数',total:12345},{name:'待发布',total:123456},{name:'已发布',total:12345}
        ])
        // console.log(9999,test,test.aa());
        return {
            dramaList
        };
    },
};
</script>

<style lang="less" scoped>
.drama{
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(245, 245, 245, 1);
    display: flex;
    .standard-box{
        box-shadow: 0px 1px 4px 0px rgba(0, 59, 129, 0.15);
        border-radius: 3px;
        background: #FFFFFF;
    }
    .drama-left{
        flex: 7;
        margin-right: 20px;
        .drama-type{
            height: 93px;
            display: flex;
            li{
                flex: 1;
                margin-right: 20px;
                box-shadow: 0px 1px 4px 0px rgba(0, 59, 129, 0.15);
                display: flex;
                .dramaImg{
                    margin: 10px;
                    width: 84px;
                    height: 72px;
                    background: url("../assets/image/script-maage/juben.png");
                }
                .dramaData{
                    flex: 1;
                    p{
                        font-size: 14px;
                        font-weight: 400;
                        color: #1A1A1A;
                        line-height: 21px;
                    }
                    h3{
                        font-size: 30px;
                        font-weight: bold;
                        color: #0082FF;
                        line-height: 20px;
                    }
                }
            }
            li:last-of-type{
                margin: 0;
            }
        }
        .drama-list{
            margin-top: 20px;
            width: 100%;
            height: 100px;
            height: calc(100% - 113px);
            ._title{
            }
        }
    }
    .drama-right{
        flex: 2;
        background: white;
    }
}
</style>