let positions = [
            { num: 1, rotation: "rotateX(0deg) rotateY(0deg)" },   // 1 
            { num: 2, rotation: "rotateX(90deg) rotateY(0deg)" },  // 2 
            { num: 3, rotation: "rotateX(0deg) rotateY(-90deg)" }, // 3 
            { num: 4, rotation: "rotateX(0deg) rotateY(90deg)" },  // 4
            { num: 5, rotation: "rotateX(-90deg) rotateY(0deg)" }, // 5 
            { num: 6, rotation: "rotateX(180deg) rotateY(0deg)" }  // 6 
        ];

        let lastCube = null;

        function UpСube() {
            const cube = document.getElementById("cube");

            let CubeUp;
            do {
                CubeUp = Math.floor(Math.random() * 6);
            } while (CubeUp === lastCube);

            lastCube = CubeUp;
            let selected = positions[CubeUp];

            let X = (Math.floor(Math.random() * 4) + 2) * 360;
            let Y = (Math.floor(Math.random() * 4) + 2) * 360;

            cube.style.transition = "transform 0.6s ease-out";
            cube.style.transform = `rotateX(${X}deg) rotateY(${Y}deg)`;

            setTimeout(() => {
                cube.style.transition = "transform 0.3s ease-out";
                cube.style.transform = selected.rotation;

                setTimeout(() => {
                    alert("Вам випало число: " + selected.num);
                }, 400);
            }, 500);
        }