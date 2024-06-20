
const TIME_EXHIBIT_01 = 8000;
const TIME_EXHIBIT_02 = 19000;
const TIME_EXHIBIT_03 = 7000;
const TIME_EXHIBIT_04 = 7000;
const TIME_EXHIBIT_05 = 12000;
const TIME_EXHIBIT_06 = 9000;

function clientConsoleLog(log_content)
{
    console.log(log_content);
}

class MKPC_Verse
{
    constructor()
    {
        //clientConsoleLog("Class instantiated");
    }
}

// Get the button
//var btn = document.getElementById("video_button");

function action_button_clicked()
{
    if (progress == 0)
    {
        progress = 1;
        start_tour();

        // Update icon
        var icon = document.getElementById("action_button");

        if (icon)
        {
            icon.innerHTML = '<i class="material-icons" style="font-size:36px">home</i>';   
        }
    }
    else
    {
        return_home();

        // Update icon
        var icon = document.getElementById("action_button");

        if (icon)
        {
            icon.innerHTML = '<i class="material-icons" style="font-size:36px">play_arrow</i>';   
        }
    }
}

function start_tour()
{
    //window.location.href = "kowloon-wallaxy";

    // Get the video
    var video = document.getElementById("video_div");

    if (video)
    {
        video.setAttribute("src", "res/videos/demo_old.mp4");
        // video.setAttribute("src", "res/videos/exhibit_01.mp4");
        // video.poster = "res/images/exhibit_01.png";
        //video.muted = false;
        // video.loop = false;
        // video.load();
        // video.play();

        var intro_text = document.getElementById("title");

        if (intro_text)
        {
            intro_text.innerHTML = "Before its demolition, >50,000 people were crammed into this unplanned slum";
        }

        var sub_text = document.getElementById("subtitle");

        if (sub_text)
        {
            sub_text.style.visibility = "hidden";
        }

        // clientConsoleLog("Now playing exhibit " + progress);
        
        // video.onended = function() {
        //     if (progress < 6)
        //     {
        //         progress++;
        //     }
        //     else
        //     {
        //         progress = 1;
        //     }

        //     var intro_text = document.getElementById("title");

        //     if (intro_text)
        //     {
        //         switch (progress)
        //         {
        //             case 1:
        //                 intro_text.innerHTML = "Before its demolition, >50,000 people were crammed into this unplanned slum";
        //                 break;
        //             case 2:
        //                 intro_text.innerHTML = "Cantonese-speaking communities refer to it as the “City of Darkness”";
        //                 break;
        //             case 3:
        //                 intro_text.innerHTML = "Upper levels comprised a tangled network of staircases and passageways";
        //                 break;
        //             case 4:
        //                 intro_text.innerHTML = "Exposed, overhanging electrical wires and dripping pipes were seen all over the place";
        //                 break;
        //             case 5:
        //                 intro_text.innerHTML = "The city managed to be self-sufficient with its Chinese shopkeepers, and even unlicensed doctors";
        //                 break;
        //             case 6:
        //                 intro_text.innerHTML = "Many former residents share fond memories of the Kowloon Walled City, despite its often-notorious reputation";
        //                 break;
        //             default:
        //                 break;
        //         }
        //     }

        //     // clientConsoleLog("Now playing exhibit " + progress);

        //     video.setAttribute("src", "res/videos/exhibit_0" + progress + ".mp4");
        //     video.poster = "res/images/exhibit_0" + progress + ".png";
        //     //video.muted = false;
        //     video.loop = false;
        //     video.load();
        //     video.play();
        // }
    }

    var overlay = document.getElementById("overlay");

    if (overlay)
    {
        overlay.className = "exhibit_overlay";
    }

    timer = 0;

    setTimeout(next_step, TIME_EXHIBIT_01);
}


function next_step()
{
    if (progress < 6)
    {
        progress++;
    }
    else
    {
        progress = 1;
    }

    var intro_text = document.getElementById("title");

    if (intro_text)
    {
        switch (progress)
        {
            case 1:
                intro_text.innerHTML = "Before its demolition, >50,000 people were crammed into this unplanned slum";
                break;
            case 2:
                intro_text.innerHTML = "Cantonese-speaking communities refer to it as the “City of Darkness”";
                break;
            case 3:
                intro_text.innerHTML = "Upper levels comprised a tangled network of staircases and passageways";
                break;
            case 4:
                intro_text.innerHTML = "Exposed, overhanging electrical wires and dripping pipes were seen all over the place";
                break;
            case 5:
                intro_text.innerHTML = "The city managed to be self-sufficient with its Chinese shopkeepers, and even unlicensed doctors";
                break;
            case 6:
                intro_text.innerHTML = "Many former residents share fond memories of the Kowloon Walled City, despite its often-notorious reputation";
                break;
            default:
                break;
        }
    }

    // clientConsoleLog("Now playing exhibit " + progress);
    // setTimeout(next_step, 5000);

    switch (progress)
    {
        case 1:
            setTimeout(next_step, TIME_EXHIBIT_01);
            break;
        case 2:
            setTimeout(next_step, TIME_EXHIBIT_02);
            break;
        case 3:
            setTimeout(next_step, TIME_EXHIBIT_03);
            break;
        case 4:
            setTimeout(next_step, TIME_EXHIBIT_04);
            break;
        case 5:
            setTimeout(next_step, TIME_EXHIBIT_05);
            break;
        case 6:
            setTimeout(next_step, TIME_EXHIBIT_06);
            break;
        default:
            break;
    }
}

function return_home()
{
    // Get the video
    var video = document.getElementById("video_div");

    if (video)
    {
        video.setAttribute("src", "res/videos/intro.mp4");
        video.muted = false;
        video.loop = true;
        video.play();
    }

    var overlay = document.getElementById("overlay");

    if (overlay)
    {
        overlay.className = "overlay";
    }

    var intro_text = document.getElementById("title");

    if (intro_text)
    {
        intro_text.innerHTML = "Kowloon Wallaxy Tour";
    }

    var sub_text = document.getElementById("subtitle");

    if (sub_text)
    {
        sub_text.style.visibility = "visible";
    }

    progress = 0;
}

function enter_fullscreen()
{
    clientConsoleLog("Entering fullscreen");
    // if (video.paused)
    // {
    //     video.play();
    //     btn.innerHTML = "Pause";
    // }
    // else
    // {
    //     video.pause();
    //     btn.innerHTML = "Play";
    // }
    
    /* Get the documentElement (<html>) to display the page in fullscreen */
    var elem = document.documentElement;
    
    /* When the openFullscreen() function is executed, open the video in fullscreen.
    Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function exit_fullscreen()
{
    if (document && document.hasFocus())
    {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }
}