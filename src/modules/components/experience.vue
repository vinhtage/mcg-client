<template>
    <div class="experience">
        <div class="align-full">
            <div class="box-ex">
                <div class="title">
                    <div class="ex column">
                        <span class="note">KINH NGHIỆM VƯỢT TRỘI</span>
                        <span class="ex-text">Hơn một thập kỷ của sự Phát triển và Đổi mới </span>
                    </div>
                    <div class="ex-desc">
                        <span class="ex-desc-text">
                            iPeopleX tự hào với bề dày kinh nghiệm trong việc phát triển các giải pháp quản lý nhân sự đột phá. Chúng tôi không ngừng cải tiến để đảm bảo nền tảng của chúng tôi luôn đáp ứng nhu cầu phong phú của doanh nghiệp, mang lại những giá trị vượt trội cho khách hàng, với trọng tâm là sự đổi mới và trải nghiệm người dùng tối ưu.
                        </span>
                    </div>
                </div>
                <div class="data">
                    <div class="item">
                        <div class="num">
                            10 +
                        </div>
                        <span class="item-text">Năm kinh nghiệm phát triển giải pháp phần mềm</span>
                    </div>
                    <div class="item">
                        <div class="num">
                            100 +
                        </div>
                        <span class="item-text">Doanh nghiệp đã cung cấp giải pháp phần mềm</span>
                    </div>
                    <div class="item">
                        <div class="num">
                            50 +
                        </div>
                        <span class="item-text">Doanh nghiệp đã sử dụng giải pháp phần mềm</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Experience',
    components:{
        
    }
}
</script>

<style lang="scss">
.experience {
    padding: 20px 0;

    .box-ex {
        position: relative;
        background-image: url('../../assets/back3.png');
        background-size: cover;
        width: 100%;
        height: 520px;
        color: #FFF;

        &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(31, 54, 79, 0.51);
        }

        .title {
            position: relative;
            padding: 60px 50px 40px 50px;
            display: flex;
            justify-content: space-between;

            .ex {
                gap: 15px;
                width: 550px;

                .note {
                    font-size: 15px;
                    line-height: 27.9px;
                    font-weight: 600;
                    color: rgba(154, 235, 255, 1);
                }

                .ex-text {
                    font-size: 39px;
                    line-height: 60px;
                    font-weight: 700;
                }
            }

            .ex-desc {
                font-size: 15px;
                line-height: 28px;
                font-weight: 300;
                text-align: justify;
                width: 500px;
            }
        }

        .data {
            position: relative;
            padding: 50px;
            display: flex;
            justify-content: space-between;

            .item {
                width: 263px;
                display: flex;
                flex-direction: column;
                gap: 26px;
                border-left: 3px solid rgba(255, 255, 255, 1);
                padding-left: 30px;

                .num {
                    font-size: 80px;
                    line-height: 60px;
                    font-weight: 800;
                }

                .item-text {
                    font-size: 13px;
                    line-height: 25px;
                    font-weight: 300;
                }
            }
        }
    }
}
</style>
