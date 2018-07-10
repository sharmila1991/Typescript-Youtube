var YoutubeVedio = /** @class */ (function () {
    //constructor
    function YoutubeVedio(vedioTitle, vedioDescription, noOfViews, noOfLikes, noOfDislikes, noOfSubscriptions, relatedVedios, autoPlay, comments) {
        var _this = this;
        //getter methods
        this.getNoOfLikes = function () {
            return _this.noOfLikes;
        };
        this.getNoOfDislikes = function () {
            return _this.noOfDislikes;
        };
        this.getNoOfSubscriptions = function () {
            return _this.noOfSubscriptions;
        };
        this.getNoOfViews = function () {
            return _this.noOfViews;
        };
        this.getVedioTitle = function () {
            return _this.vedioTitle;
        };
        this.getVedioDescription = function () {
            return _this.vedioDescription;
        };
        this.getAutoPlay = function () {
            return _this.autoPlay;
        };
        this.getRelatedVedios = function () {
            return _this.relatedVedios;
        };
        this.getComments = function () {
            return _this.comments;
        };
        //methods
        this.incrementLikes = function () {
            _this.noOfLikes++;
        };
        this.incrementDislikes = function () {
            _this.noOfDislikes++;
        };
        this.incrementSubscriptions = function () {
            _this.noOfSubscriptions++;
        };
        this.incrementViews = function () {
            _this.noOfViews++;
        };
        this.setautoPlay = function () {
            _this.autoPlay = true;
        };
        this.unSetAutoPlay = function () {
            _this.autoPlay = false;
        };
        this.addComments = function () {
            var comment = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                comment[_i] = arguments[_i];
            }
            var newComments = comment;
            _this.comments = _this.comments.concat(newComments);
        };
        this.vedioTitle = vedioTitle;
        this.vedioDescription = vedioDescription;
        this.noOfViews = noOfViews;
        this.noOfLikes = noOfLikes;
        this.noOfDislikes = noOfDislikes;
        this.noOfSubscriptions = noOfSubscriptions;
        this.relatedVedios = relatedVedios;
        this.autoPlay = autoPlay;
        this.comments = comments;
    }
    return YoutubeVedio;
}());
var myVedio = new YoutubeVedio("angular basics", "This vedio explains all the basic concepts of Angular", 900, 30, 3, 20, ["angular advance", "node.js vedio", "typescript basics"], true, ["Nice Vedio", "Good Explanation", "Awesome Vedio"]);
console.log("Vedio Title:" + myVedio.getVedioTitle());
console.log("Vedio Description:" + myVedio.getVedioDescription());
console.log("No.Of Veiws:" + myVedio.getNoOfViews());
console.log("No.Of Likes:" + myVedio.getNoOfLikes());
console.log("No.Of DisLikes:" + myVedio.getNoOfDislikes());
console.log("No.Of Subscriptions:" + myVedio.getNoOfSubscriptions());
console.log("AutoPlay:" + myVedio.getAutoPlay());
console.log("Titles of Related Vedios:" + myVedio.getRelatedVedios());
console.log("Comments:" + myVedio.getComments());
//Updated Comments
console.log('\n' + "Updated Values");
myVedio.incrementViews();
console.log("Views:" + myVedio.getNoOfViews());
myVedio.incrementLikes();
console.log("Likes:" + myVedio.getNoOfLikes());
myVedio.incrementSubscriptions();
console.log("Subscriptions:" + myVedio.getNoOfSubscriptions());
myVedio.unSetAutoPlay();
console.log("AutoPlay:" + myVedio.getAutoPlay());
myVedio.addComments("What are the prerequisites for learning Angular", "Is TypeScript Mandatory for Angular");
console.log("Comments:" + myVedio.getComments());
