<template>
    <div class="profile">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>This is a profile page</h1>
        <div class="container mt-3">
            <div class="row justify-content-center">
                <div class="col-6">
                    <div class="media text-left">
                        <img src="../assets/photo.jpg" class="align-self-center mr-3 profile-pict" alt="#">
                        <div class="media-body">
                            <h3 class="mt-0">{{firstName}} {{lastName}}</h3>
                            <p><strong>{{bio}}</strong>, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus doloremque molestias iste ullam maiores amet repudiandae. Illum, nisi, hic!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
    name: 'profile',
    // JSON for Profile Name
    data: function() {
        return {
            firstName: "Yoga",
            lastName: "Isnaini Nugroho",
            bio: "This is Bio taken from JSON data and Porfile name above also taken from JSON"
        };
    },
    components: {}
}
</script>

<style scope>
.profile-pict {
    border-radius: 50%;
    height: 100px;
}
</style>