<template>
    <div class="leading-normal tracking-normal" id="main-body">
      <div class="flex flex-wrap">

        <Sidebar />

        <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

        <Navbar />

        <div class="p-6 bg-gray-100 mb-20" style="min-height:80vh">
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex">
                  <div class="md:flex-shrink-0">
                  <img class="h-48 w-full object-cover md:w-48" src="https://fotografias.antena3.com/clipping/cmsimages01/2018/08/29/13FA26A0-3F4F-411F-B249-04ED23C8BCB6/69.jpg" alt="Man looking at item at a store">
                  </div>
                  <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                  <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                  <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                  </div>
              </div>
          </div>
          <button class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
              Click me
          </button>
        </div>

        <Footer />

      </div>
    </div>
  </div>
</template>
<script src="./Dashboard.js"></script>