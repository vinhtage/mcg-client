<template>
    <div class="footer">
        <div class="align-full">
            <div class="box-content">
                 <div class="left">
                     <img class="logo mb-16" src="@/assets/ipx-logo2.png" alt="logo">
                     <div class="content">
                         <div class="address column mb-24">
                             <span class="title"> Địa chỉ: </span>
                             <span> Tầng 10, 141 Bà Triệu, Hai Bà Trưng, Hà Nội </span>
                         </div>
                         <div class="contact column mb-24">
                             <span class="title"> Liên hệ: </span>
                             <span class="link"> +84 24 3955 0082 </span>
                             <span class="link"> mcg@mcg.vn </span>
                         </div>
                         <div class="icon mb-24">
                             <img class="mr-6" src="@/assets/fb.png" alt="facebook">
                             <img class="ml-6" src="@/assets/zalo.png" alt="zalo">
                         </div>
                     </div>
                 </div>
                 <div class="right column">
                     <span>Về chúng tôi</span>
                     <span>Giải pháp</span>
                     <span>Báo giá</span>
                     <span>Kiến thức</span>
                     <span>Khách hàng</span>
                     <span>Liên hệ</span>
                 </div>
            </div>
            <div class="credit">
                 <span class="t-desc">© 2024 iPeopleX. All rights reserved.</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    components:{
        
    }
}
</script>

<style lang="scss">
    .footer {
        padding-top: 20px !important;
        padding-bottom: 50px !important;

        .box-content {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .left {
                .content {
                    font-size: 14px;
                    line-height: 21px;

                    .title {
                        font-weight: 600;
                    }

                    .link {
                        text-decoration: underline;
                    }
                }

                .icon {
                    img {
                        width: 24px;
                        height: 24px;
                    }
                }
            }

            .right {
                height: 224px;
                justify-content: space-between;
                text-align: right;

                span {
                    font-size: 15px;
                    line-height: 24px;
                    font-weight: 600;
                }
            }
        }

        .credit {
            height: 58px;
            border-top: 1px solid #000000;
            display: flex;
            justify-content: center;
            align-items: flex-end;
        }
    }
</style>

