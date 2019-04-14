<template>
    <div class = "wrapper container-fluid">
        <client-header 
            :isShowHome = "true"
            :isShowIntroduction = "false"
            :isShowCharacter = "false"
            :isShowVideolist = "false"
            :isShowUserlist = "false"></client-header>
        <div id = "home" class = "home-wrapper rel">
            <p class = "abs">Pellentesque tempus ex sed aliquet elementum justo ipsumfeufiat tortor?</p>
        </div>
        <div id = "introduction" class = "introduction-wrapper rel">
            <div class = "content abs">
                <h1>INTRODUCTION</h1>
                <p class = "detail">When I am at home, I often help my mother do some housework and my mother said I am a good helper, too. My mother is a barber.She cuts hair very well.She is kind.Many people like her. she often teaches me the way of learning well, if you want to learn English well, here is some of my advice. At first , you must read many articles and know many words, if you meet up with some new words, you can look them up in the dictionary,</p>
                <p class = "detail">When I am at home, I often help my mother do some housework and my mother said I am a good helper, too. My mother is a barber.She cuts hair very well.She is kind.Many people like her. she often teaches me the way of learning well, if you want to learn English well, here is some of my advice. At first , you must read many articles and know many words, if you meet up with some new words, you can look them up in the dictionary,</p>
                <p class = "detail">When I am at home, I often help my mother do some housework and my mother said I am a good helper, too. My mother is a barber.She cuts hair very well.She is kind.Many people like her. she often teaches me the way of learning well, if you want to learn English well, here is some of my advice. At first , you must read many articles and know many words, if you meet up with some new words, you can look them up in the dictionary,</p>
            </div>
        </div>
        <div id = "character" class = "character-wrapper rel">
            <div class = "content abs">
                <h1>CHARACTERS</h1>
                <div class="media">
                    <div class="media-left media-middle">
                        <a href="#">
                            <img class="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNjlhNDVmMTY3ZiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE2OWE0NWYxNjdmIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 100px; height: 100px;">
                        </a>
                    </div>
                    <div class="media-body">
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                </div>
                <div class="media">
                    <div class="media-left media-middle">
                        <a href="#">
                            <img class="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNjlhNDVmMTY3ZiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE2OWE0NWYxNjdmIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 100px; height: 100px;">
                        </a>
                    </div>
                    <div class="media-body">
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                </div>
                <div class="media">
                    <div class="media-left media-middle">
                        <a href="#">
                            <img class="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNjlhNDVmMTY3ZiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE2OWE0NWYxNjdmIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 100px; height: 100px;">
                        </a>
                    </div>
                    <div class="media-body">
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import header from '@/components/header';

export default {
    components: {
        'client-header': header
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.wrapper{
    .home-wrapper{
        background-image: url(../assets/images/home/home_bg.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        width: -webkit-fill-available;
        height: -webkit-fill-available;

        p{
            color: #ffffff;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 50px;
            font-weight: bold;
        }
    }
    .character-wrapper{
        background-image: url(../assets/images/character/character_bg.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        width: -webkit-fill-available;
        height: -webkit-fill-available;

        .content{
            color: #ffffff;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 50px;
            font-weight: bold;
            width: 75%;

            h1{
                text-align: center;
                font-size: 50px;
                margin-bottom: 30px;
            }

            .media{
                margin-bottom: 30px;

                .media-object{
                    border-radius: 100%;
                    margin-right: 20px;
                }

                p{
                    font-size: 16px;
                }
            }
        }
    }
    .introduction-wrapper{
        background-image: url(../assets/images/introduction/introduction_bg.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        width: -webkit-fill-available;
        height: -webkit-fill-available;

        .content{
            color: #ffffff;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 50px;
            font-weight: bold;
            width: 75%;

            h1{
                text-align: center;
                font-size: 50px;
                margin-bottom: 30px;
            }

            .detail{
                font-size: 16px;
                margin-bottom: 30px;
            }
        }
    }
}
</style>
