const routes = [
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "/",
        name: "Login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "/signup",
        name: "Signup",
        component: () => import("pages/SignupPage.vue"),
      },
    ],
  },
  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "template",
        name: "Template",
        component: () => import("pages/TemplatePage.vue"),
      },
    ],
  },
  {
    path: "/edit",
    component: () => import("layouts/EditLayout.vue"),
    children: [
      {
        path: "/template/:id",
        name: "Edit",
        component: () => import("pages/EditPage.vue"),
      },
      {
        path: "/create",
        name: "CreateTemplate",
        component: () => import("pages/CreateTemplate.vue"),
      },
      {
        path: "/content/:id",
        name: "EditContent",
        component: () => import("pages/EditContentPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
