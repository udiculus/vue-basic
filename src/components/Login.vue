<template>
    <div>
        <app-header></app-header>
        <div class="mt-5">
            <div class="form-canvas">
                <form method="post">
                    <div class="text-center mb-4">
                        <h1 class="h3 mb-3 font-weight-normal">Login</h1>
                        <p>Put username and password with <br/>'admin' and 'admin123' or 'author' and 'author123'</p>
                    </div>
                    <div class="form-label-group">
                        <input autofocus="" class="form-control" id="username" name="username" placeholder="Type your username" required="" type="text"> <label for="username">Username</label>
                    </div>
                    <div class="form-label-group">
                        <input class="form-control" id="password"  name="password" placeholder="Type your password" required="" type="password"/><label for="password">Password</label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                    <div class="nav-to-home">
                        <router-link to="/article">Back to Home</router-link>
                    </div>
                </form>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'

    export default {
        name: "Login",
        components: {
            'app-header': Header,
            'app-footer': Footer
        }
    }
</script>

<style scoped>

</style>
