function showNotifications() {

    if( ! ("Notification" in window)) {
        console.log('Navegador não suporta notificação');
    }
        else if ( Notification.permission == "granted") {
            const notify = new Notification ('Olá, bem vindo(a) de volta! ');
    }
        else if ( Notification.permission !== "denied")
        Notification.requestPermission ( function(permission) {
        if(permission == "granted"){
            const notify = new Notification ('Olá, bem vindo(a)');
        }
    })
}