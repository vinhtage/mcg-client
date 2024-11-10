<template>
    <div class="event">
        <div class="align-full">
            <div class="event1">
                <span class="t1">SỰ KIỆN</span>
        
                <div class="t1-desc">
                    <span>iPeopleX tự hào mang đến chính sách giá linh hoạt nhất thị trường</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Event',
    components:{
    }
}
</script>

<style lang="scss">
.event {
    width: 100%;
    background-image: url('../../assets/home2.png');
    background-size: cover;
    background-position: bottom;

    .event1 {
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