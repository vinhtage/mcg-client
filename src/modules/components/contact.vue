<template>
    <div class="contactus">
        <div class="align-full">
            <div class="title">
                <span>LIÊN HỆ VỚI CHÚNG TÔI ĐỂ ĐƯỢC TƯ VẤN</span>
            </div>
            <img src="@/assets/arrow.png">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    components:{
        
    }
}
</script>

<style lang="scss">
    .contactus {
        position: relative;
        background-image: url('../../assets/contactus.png');
        background-position: center;

        .align-full {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 280px;

            .title {
                position: relative;
                width: 700px;

                span {
                    font-size: 50px;
                    line-height: 60.95px;
                    font-weight: 700;
                    color: #FFF;
                }
            }

            img {
                width: 115px;
                height: 115px;
                position: relative;
                right: 20%;
                border-radius: 50%;
                animation: flutter 3s infinite;
            }
        }

        &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(3, 34, 82, 0.55);
        }
    }

    @keyframes flutter {
        33% {
            box-shadow: 0px 0px 0px 40px rgba(0, 184, 230, 0.2);
        }

        66% {
            box-shadow: 0px 0px 0px 40px rgba(0, 184, 230, 0.2), 0px 0px 0px 80px rgba(0, 184, 230, 0.2);
        }

        100% {
            box-shadow: 0px 0px 0px 80px rgba(0, 184, 230, 0.2);
        }
    }
</style>
