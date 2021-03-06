SceneJS.Types.addType("buildings/city", {

    init:function (params) {

        // Add a grid of buildings
        for (var x = -300; x < 300; x += 50) {
            for (var z = -300; z < 300; z += 50) {
                this.addNode({
                    type:"buildings/building",
                    pos:{
                        x:x,
                        y:0,
                        z:z
                    }
                });
            }
        }
    }
});