class Time {
    //format date_now et date_choix h:m:s:ms
    static time_now() {
        let d = new Date()
        let h = d.getHours()
        let m = d.getMinutes()
        let s = d.getSeconds()
        let ms = d.getMilliseconds()
        h < 10 ? h = 0 + '' + h : h = h
        m < 10 ? m = 0 + '' + m : m = h
        s < 10 ? s = 0 + '' + s : s = s
        let times_now = h + '' + m + '' + s
        return times_now
    }
    static differentTimes(time_now, time) {
        let decalTime = time - time_now
        let decal_len = decalTime.toString().length
        let hours_plus = 0
        let minutes_plus = 0
        let time_final = 0
        let hours
        let minutes
        let seconds
        if (decalTime < 0) {
            let decalTime_string = decalTime.toString()

            if (decal_len = 5) {

                minutes = decalTime_string[1] + "" + decalTime_string[2]
                seconds = decalTime_string[3] + "" + decalTime_string[4]
                if (parseInt(seconds) >= 60) {
                    seconds = seconds % 60
                    minutes_plus = 1
                } else {
                    seconds = seconds
                    minutes_plus = 0
                } if (parseInt(minutes) >= 60) {
                    minutes = minutes % 60
                    hours_plus = 1
                } else {
                    minutes = minutes
                    hours_plus = 0
                }
                return time_final = {
                    "hours": hours_plus,
                    "minutes": parseInt(minutes_plus) + parseInt(minutes),
                    "seconds": seconds
                }
            }
            if (decal_len = 6) {
                hours = decalTime_string[1]
                minutes = decalTime_string[2] + "" + decalTime_string[3]
                seconds = decalTime_string[4] + "" + decalTime_string[5]
                if (parseInt(seconds) >= 60) {
                    seconds = seconds % 60
                    minutes_plus = 1
                } else {
                    seconds = seconds
                    minutes_plus = 0
                }
                if (parseInt(minutes) >= 60) {
                    minutes = minutes % 60
                    hours_plus = 1
                } else {

                    minutes = minutes
                    hours_plus = 0
                }
                return time_final = {
                    "hours": parseInt(hours_plus) + parseInt(hours),
                    "minutes": parseInt(minutes_plus) + parseInt(minutes),
                    "seconds": seconds
                }
            }
            if ((decal_len = 7)) {
                hours = decalTime_string[1] + "" + decalTime_string[2]
                minutes = decalTime[3] + "" + decalTime[4]
                seconds = decalTime[5] + "" + decalTime[6]

                if (parseInt(seconds) >= 60) {
                    seconds = seconds % 60
                    minutes_plus = 1
                } else {
                    seconds = seconds
                    minutes_plus = 0
                }
                if (parseInt(minutes) >= 60) {
                    minutes = minutes % 60
                    hours_plus = 1
                } else {

                    minutes = minutes
                    hours_plus = 0
                }
                return time_final = {
                    "hours": parseInt(hours_plus) + parseInt(hours),
                    "minutes": parseInt(minutes_plus) + parseInt(minutes),
                    "seconds": seconds
                }
            }
        }
        else
        {
            let decalTime_string = decalTime.toString()

           if(decal_len =4){
                 minutes = decalTime_string[0]+""+decalTime_string[1]
                 seconds = decalTime_string[2]+""+decalTime_string[3]
                if(parseInt(seconds)>=60){
                    seconds = seconds%60 
                    minutes_plus= 1
                }else{
                    seconds =seconds 
                    minutes_plus= 0
                } if (parseInt(minutes)>=60) {
                    minutes = minutes%60
                    hours_plus =1  
                } else {
                    minutes = minutes
                    hours_plus =0
                }
         return time_final = {
            "hours":hours_plus, 
            "minutes" :parseInt(minutes_plus)+ parseInt(minutes),
            "seconds" :seconds
            }
        }
        if(decal_len =5){
            hours = decalTime_string[0]
            minutes = decalTime_string[1]+""+decalTime_string[2]
            seconds = decalTime_string[3]+""+decalTime_string[4]
            if(parseInt(seconds)>=60){
                seconds = seconds%60 
                minutes_plus= 1
            }else{
                seconds =seconds
                minutes_plus= 0
            }
            if (parseInt(minutes)>=60) {
                minutes = minutes%60
                hours_plus =1  
            } else {
                
                minutes = minutes
                hours_plus =0
            }
            return time_final = {
                "hours":parseInt(hours_plus) + parseInt(hours), 
                "minutes" :parseInt(minutes_plus)+ parseInt(minutes),
                "seconds" :seconds
                } 
    }
            if((decal_len =6)){
             hours = decalTime_string[0]+""+decalTime_string[1]
             minutes = decalTime[2]+""+decalTime[3]
             seconds = decalTime[4]+""+decalTime[5]

                if(parseInt(seconds)>=60){
                    seconds = seconds%60 
                    minutes_plus= 1
                }else{
                    seconds =seconds
                    minutes_plus= 0
                }
                if (parseInt(minutes)>=60) {
                    minutes = minutes%60
                    hours_plus =1  
                } else {
                    
                    minutes = minutes
                    hours_plus =0
                }
                return time_final = {
                    "hours":parseInt(hours_plus) + parseInt(hours), 
                    "minutes" :parseInt(minutes_plus)+ parseInt(minutes),
                    "seconds" :seconds
                    } 
        }
        }
    }
}
