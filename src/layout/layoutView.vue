<template>
  <div class="drawer lg:drawer-open">
    <input
      id="my-drawer-2"
      type="checkbox"
      class="drawer-toggle"
    />
    <div class="drawer-content flex items-start">
      <!-- Page content here -->

      <!-- navBar -->
      <div class="navbar bg-base-100 mt-4 shadow-xl rounded-box ml-2 mr-4">
        <div class="navbar-start">
          <!-- sideBar開關 僅有在平板手機模式上會出現-->
          <label
            tabindex="0"
            for="my-drawer-2"
            class="btn btn-ghost btn-circle drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <!-- PageTitle -->
          <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
        </div>
        <div class="navbar-end">
          <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
              <li><a>Link</a></li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul class="p-2 bg-base-100">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- sideBar 內容 -->
    <div
      class="drawer-side m-4 rounded-box shadow-xl overflow-hidden"
      style="height: 96.6vh"
    >
      <label
        for="my-drawer-2"
        class="drawer-overlay"
      ></label>
      <perfect-scrollbar class="h-full">
        <ul
          class="menu p-4 w-64 bg-base-200 text-base-content flex-nowrap overflow-y-auto"
        >
          <!-- Sidebar content here -->
          <li class="w-100"><a>Sidebar Item 1</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
          <li class="w-100"><a>Sidebar Item 2</a></li>
        </ul>
      </perfect-scrollbar>
    </div>
  </div>
</template>
<script>
// import { onMounted } from 'vue';
// import { useStore } from 'vuex';

export default {
  setup() {
    return {};
  },
};
</script>
