class Scroller {

    constructor($options) {

        this.mDoms = document.querySelectorAll(".LTScroller");

        this.mHeight = ($options.height != undefined && $options.height >= 10) ?
                        $options.height :
                        500;

        this.INNERCLASS = "LTScroller__Inner";
        this.SCROLLCLASS = "LTScroller__ScrollBar";
    }



    render() {
        var self = this;
        for (var i = 0; i < self.mDoms.length; i++) {
            let $element = self.mDoms[i];
            let content = $element.innerHTML;
            $element.innerHTML = '<div class="' + self.INNERCLASS + '">' + content + '</div>' + '<div class="' + self.SCROLLCLASS + '"><span></span></div>';

            let $inner = $element.querySelector("." + self.INNERCLASS);
            let $scrollbar = $element.querySelector("." + self.SCROLLCLASS);

            //set height
            if($element.offsetHeight <= self.mHeight){
                $element.classList.add("disableHorizontalScroll");
                continue;
            }
            $element.style.height = self.mHeight + "px";
            $inner.style.height = self.mHeight + "px";

            //set scrollbar height 
            $scrollbar.querySelector("span").style.height = (self.mHeight / $inner.scrollHeight * 100) + "%";


            $inner.addEventListener("scroll", function(e) {
                $scrollbar.querySelector("span").style.top = (e.target.scrollTop / $inner.scrollHeight * 100) + "%";
            });
        }
    }




}
