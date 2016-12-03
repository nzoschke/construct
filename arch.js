// var s = Snap("#svg");
// var console = s.rect(10, 10, 980, 40)
// var console = s.rect(10, 10, 980, 40)

base = [
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
]

infra = [
	[3, 2, 4, 4],
	[2, 2, 3, 3],
	[2, 2, 2, 2],
	[1, 2, 2, 3],
]

devops = [
	[2, 2, 2, 4],
	[2, 2, 3, 3],
	[2, 2, 2, 2],
	[1, 2, 2, 3],
]

convox = [
	[1, 2, 0, 0],
	[2, 2, 1, 1],
	[2, 2, 2, 2],
	[3, 2, 2, 1],
]

// var iso = new Isomer(document.getElementById("art"));

var Shape = Isomer.Shape;
var Point = Isomer.Point;
var Color = Isomer.Color;

var red = new Color(160, 60, 50);
var blue = new Color(50, 60, 160);
var orange = new Color(255, 157, 0);

var stack = function(id, l1, l2, color) {
	// console.log(id)
	var iso = new Isomer(document.getElementById(id));

	for (var i = 3; i >= 0; i--) {
		for (var j = 3; j >= 0; j--) {
			h = l2[3-i][j]

			// if (h == 0)
			// 	continue

			iso.add(Shape.Prism(
				Point(j, i, l1[3-i][j]),
				1, 1, l2[3-i][j]
			), color)
		}
	}
}

stack("infra", 	base, 	infra, 	orange)

stack("devops", base, 	infra, 	orange)
stack("devops", infra, 	devops, red)

stack("convox", base, 	infra, 	orange)
stack("convox", infra, 	convox, blue)

// stack("convox", infra, 	convox, blue)
