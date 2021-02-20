// #####################################################
//compeosants
Vue.component('message',{
    props:['type', 'message'],
    template: '<div class="msg" :class="type">{{message}}</div>'
})  

let message = function() {
    
}
// #######################################################




// filter global
Vue.filter('capitalize', function (value) {
    return value.toUpperCase()
})
Vue.filter('capitalize_plusparam', function (value, prefix, suffix) {
    return prefix + value.toUpperCase() + suffix
})

// ############################################
//directive global
Vue.directive('salut',{
    bind: function(el, binding, vnode){
        el.value = binding.value
        console.log('bind')   
    },
    update: function (el, binding, vnode, oldvnode){
        el.value = binding.value
        console.log('bind')

    }
})

//directive directive commme function

let salut = function (el, binding) {
    el.value = binding.value
    console.log('bind')
}
// le compteur de modifier
// ##################

//#########################"
let capitalize_f = function (value) {
    return value.toUpperCase()
}// filter modifie la caraterc manampy, transform






let vm = new Vue({
    el: '#app',
    filters: {
        capitalize_f
    },
    
    directives: {
        salut //
    },
    data: {
        control: "",
        message: "koto",
        link: "https://free.facebook.com",
        success: true,
        users: ["Tokihery", "Tantely", "Mioty", "Sarobidy", "Fitiavana"],
        seconds: 0,
        msg_f: "Rakoto",
        msg_s: "Rabe",
        msg_fd: "",
        other: false
    },
    mounted: function () {
        this.$timer = setInterval(() => {
            this.$sec = this.seconds++
        }, 1000)
    },
    methods: {
        close: function () {
            if (this.success = true)
                this.message = "Il est fermé"
            this.success = false
        },
        arret: function () {

            if (this.$sec === 10) clearInterval(this.$timer)
        },
        addPerson: function () {
            this.users.push(this.message)
        },

    },
    watch: {
        message: function (value) {
            this.users.push(value)
        },

    },
    computed: {
        keyup: function () {
            if (this.control != "ok") this.success = true

        },

        cls: function () {
            return this.success === true ? 'success' : 'error'
        },
        plus: function () {
            return this.other === false ? 'other' : 'otherdiff'
        },
        fullmessage: {
            get: function () {
                if (this.msg_fd != undefined || this.msg_fd != "") {
                    return this.msg_f + " " + this.msg_s
                } else {
                    return this.msg_f + " " + this.msg_s + " " + this.msg_fd
                }

            },
            set: function (value) {
                let parts = value.split(" ")
                this.msg_f = parts[0]
                this.msg_s = parts[1]

                if (parts[2] != undefined || parts[2] != "") {
                    this.msg_fd = parts[2]
                } else {
                    this.msg_fd = ""
                }


            }
        }
    },
    destroyed: function () {
        if (this.$sec >= 10) clearInterval(this.$timer)
    }
})