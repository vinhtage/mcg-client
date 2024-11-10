<template>
    <div class="pricing">
        <div class="align-full">
            <div class="pricing1">
                <span class="t1">CHÍNH SÁCH GIÁ</span>
        
                <div class="t1-desc">
                    <span>iPeopleX tự hào mang đến chính sách giá linh hoạt nhất thị trường</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Pricing',
    components:{
    }
}
</script>

<style lang="scss">
.pricing {
    width: 100%;
    background-image: url('../../assets/home2.png');
    background-size: cover;
    background-position: bottom;

    .pricing1 {
        height: 540px;
        color: #FFF;
        padding-top: 272px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
}
</style>