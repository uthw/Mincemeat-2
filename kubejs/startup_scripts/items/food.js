ItemEvents.modification((event) => {
    Item.list.forEach((item) => {
        event.modify(item, (food) => {
            if (food.foodProperties) {
                food.foodProperties.saturationModifier /= 1.5;
            }
        });
    });
});
