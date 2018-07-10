class YoutubeVedio{

    //properties
    private vedioTitle:string;
    private vedioDescription:string;
    private noOfViews:number;
    private noOfLikes:number;
    private noOfDislikes :number;
    private noOfSubscriptions:number;
    private relatedVedios:string[];
    private autoPlay:boolean;
    private comments:string[];

    //constructor
    constructor(vedioTitle:string,vedioDescription:string,noOfViews:number,noOfLikes:number,noOfDislikes:number,noOfSubscriptions:number,relatedVedios:string[],autoPlay:boolean,comments:string[])
    {
        this.vedioTitle = vedioTitle;
        this.vedioDescription = vedioDescription;
        this.noOfViews=noOfViews;
        this.noOfLikes=noOfLikes;
        this.noOfDislikes = noOfDislikes;
        this.noOfSubscriptions=noOfSubscriptions;
        this.relatedVedios= relatedVedios;
        this.autoPlay = autoPlay;
        this.comments =comments;

    }
    //getter methods
    getNoOfLikes = ()=>{
        return this.noOfLikes;
        }
    getNoOfDislikes = ()=>{
        return this.noOfDislikes;
        }
    getNoOfSubscriptions = ()=>{
        return this.noOfSubscriptions;
        }
    getNoOfViews = ()=>{
        return this.noOfViews;
        }
    getVedioTitle = ()=>{
        return this.vedioTitle;
        }
    getVedioDescription = ()=>{
        return this.vedioDescription;
        }
    getAutoPlay=()=>{
        return this.autoPlay;
    }
    getRelatedVedios=()=>{
        return this.relatedVedios;
    }
    getComments=()=>{
        return this.comments;
    }

    //methods
    
    incrementLikes = ()=>{
        this.noOfLikes++;
    }
    incrementDislikes = ()=>{
        this.noOfDislikes++;
    }
    incrementSubscriptions=()=>{
        this.noOfSubscriptions++;
    }
   incrementViews=()=>{
        this.noOfViews++;
   }
    setautoPlay=()=>{
        this.autoPlay=true;
    }
    unSetAutoPlay=()=>{
        this.autoPlay = false;
    }
    addComments=(...comment:string[])=>{
             let newComments = comment;
             this.comments = this.comments.concat(newComments);
    }

}

let myVedio = new YoutubeVedio("angular basics","This vedio explains all the basic concepts of Angular",900,30,3,20,["angular advance","node.js vedio","typescript basics"],true,["Nice Vedio","Good Explanation","Awesome Vedio"]);

console.log("Vedio Title:"+myVedio.getVedioTitle());
console.log("Vedio Description:"+myVedio.getVedioDescription());
console.log("No.Of Veiws:"+myVedio.getNoOfViews());
console.log("No.Of Likes:"+myVedio.getNoOfLikes());
console.log("No.Of DisLikes:"+myVedio.getNoOfDislikes());
console.log("No.Of Subscriptions:"+myVedio.getNoOfSubscriptions());
console.log("AutoPlay:"+myVedio.getAutoPlay());
console.log("Titles of Related Vedios:"+myVedio.getRelatedVedios());
console.log("Comments:"+myVedio.getComments());

//Updated Comments
console.log('\n'+"Updated Values");

myVedio.incrementViews();
console.log("Views:"+myVedio.getNoOfViews());

myVedio.incrementLikes();
console.log("Likes:"+myVedio.getNoOfLikes());

myVedio.incrementSubscriptions();
console.log("Subscriptions:"+myVedio.getNoOfSubscriptions());

myVedio.unSetAutoPlay();
console.log("AutoPlay:"+myVedio.getAutoPlay());

myVedio.addComments("What are the prerequisites for learning Angular","Is TypeScript Mandatory for Angular");
console.log("Comments:"+myVedio.getComments());