        d.Ct = function(a, b, c) {
            if (Math.floor(Math.random()*10) === 7) {
                console.log(c)
                return "def.png"
            }
            return "http://i1.ytimg.com/" + b + "/" + a + "/" + c + ".jpg"
        }