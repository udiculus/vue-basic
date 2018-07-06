<template>
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="article in articles">
                    <div class="card mb-4 box-shadow">
                        <div style="background-color: #55595c; height: 255px"></div>
                        <div class="card-body">
                            <p class="card-text card-height">{{ article.title }}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button class="btn btn-sm btn-outline-secondary" type="button">View</button>
                                    <button class="btn btn-sm btn-outline-secondary" type="button">Edit</button>
                                    <button class="btn btn-sm btn-outline-secondary" type="button">Delete</button>
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        data: function () {
            return {
                articles: [
                    {
                        id: '192939812',
                        title: 'Meet the 50 top-funded startups and tech companies in Japan',
                        body: 'Which Japanese startups are making the most impact? One way to judge – although imperfect – would be the amount of money they have raised. Using Tech in Asia’s data, we’ve generated this constantly updated list of 50 startups and tech companies in Japan who have raised the most money from investors in the past two years. Seeking more? Search the most comprehensive database of tech companies in Asia or read our Research methodology. Special thanks to East Ventures for its assistance in compiling this list.'
                    },
                    {
                        id: '881237172',
                        title: 'A simple guide to space tech (and why you should care about it),',
                        body: 'Tech in Asia Arena alumnus Nobu Okada returned to the stage at the Singapore 2015 conference to share a primer on space tech and why it deserves more attention.'
                    },
                    {
                        id: '102138122',
                        title: 'VCs answer the eternal question: Do investors without startup experience suck?',
                        body: 'Khailee Ng (500 Startups) and Saemin Ahn (Rakuten Ventures) tackle a sticky question raised by one of our readers at the Tech in Asia 2015 conference in Singapore.'
                    },
                    {
                        id: '939128123',
                        title: 'Data scientist vs data analyst: Differences of the roles and job requirements',
                        body: 'Data is at the forefront of businesses and industries today, and organizations around the world are looking at harnessing the potential of the data at their disposal to drive revenue and profitability, improve operational productivity, and enhance customer satisfaction.'
                    },
                    {
                        id: '291883412',
                        title: 'Asia news roundup: Uber-Grab competition woes continue, Mobike drops deposits, and more',
                        body: 'Regulator provisionally finds that Grab-Uber deal infringes competition laws (Singapore). The Competition and Consumer Commission of Singapore (CCCS) has provisionally ruled that Uber’s sale of its Southeast Asia business to Grab has substantially decreased competition in the city-state’s ride-hailing sector.'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
