import { INavData } from "@coreui/angular";

export const navItems: INavData[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: "icon-grid",
    variant: "info",
  },

  {
    name: "Schedule",
    url: "/schedule",
    icon: "icon-calendar",
  },
  {
    name: "Status",
    url: "/aircraft",
    icon: "icon-info",
  },
  {
    name: "Alert",
    url: "/alert",
    icon: "icon-bell",
  },
  {
    name: "Reports",
    url: "/reports",
    icon: "icon-book-open",
  },

  {
    name: "Concession",
    url: "/concession",
    icon: "icon-drop",
  },

/* needs to be fixed properly
    {
    name: "servicing",
    icon: "icon-grid",

    variant: "info",
  },

  */
  {
    name: "Routine",
    url: "/routine",
    icon: "icon-list",
    children: [
      {
        name: "Days14",
        url: "/routine/days14",
        icon: "icon-list",
        variant: "danger",
      },
      {
        name: "1MO",
        url: "/routine/mo1",
        icon: "icon-list",
        variant: "danger",
      },
      {
        name: "3MO",
        url: "/routine/mo3",
        icon: "icon-list",
        variant: "danger",
      },
    ],
  },

  {
    name: "System",
    url: "/system",
    icon: "icon-list",
    children: [
      {
        name: "6 Mo",
        url: "/system/mo6",
        icon: "icon-list",
        variant: "success",
      },
      {
        name: "12 Mo",
        url: "/system/mo12",
        icon: "icon-list",
        variant: "success",
      },
      {
        name: "18 Mo",
        url: "/system/mo18",
        icon: "icon-list",
        variant: "success",
      },
      {
        name: "24 Mo",
        url: "/system/mo24",
        icon: "icon-list",
        variant: "success",
      },
      {
        name: "36 Mo",
        url: "/system/mo36",
        icon: "icon-list",
        variant: "success",
      },
      {
        name: "48 Mo",
        url: "/system/mo48",
        icon: "icon-list",
        variant: "success",
      },
      {
        name: "72 Mo",
        url: "/system/mo72",
        icon: "icon-list",
        variant: "success",
      },
    ],
  },

  {
    name: "Structure",
    url: "/structure",
    icon: "icon-list",
    children: [
      {
        name: "15 Mo",
        url: "/structure/mo15",
        icon: "icon-list",
        variant: "danger",
      },
      {
        name: "30 Mo",
        url: "/structure/mo30",
        icon: "icon-list",
        variant: "danger",
      },
      {
        name: "60 Mo",
        url: "/structure/mo60",
        icon: "icon-list",
        variant: "danger",
      },

      {
        name: "90 Mo",
        url: "/structure/mo90",
        icon: "icon-list",
        variant: "danger",
      },
      {
        name: "120 Mo",
        url: "/structure/mo120",
        icon: "icon-list",
        variant: "danger",
      },
    ],
  },
  {
    name: "OOPS",
    url: "/service",
    icon: "icon-list",
  },
 

  {
    name: "Service-History",
    url: "/servicehistory",
    icon: "icon-speedometer",
  },

  {
    name: "DataFeed",
    icon: "icon-grid",
    variant: "info",
    children: [
      {
        name: "Tools",
        url: "/tools",
        icon: "icon-wrench"
      },

      {
        name: "Gse",
        url: "/gse",
        icon: "icon-wrench"
      },
      {
        name: "Consumable",
        url: "/consumable",
        icon: "icon-wrench"
      },
      {
        name: "Spare",
        url: "/spare",
        icon: "icon-wrench"
      },

     
    ]
  },
 
   
  
  {
    name: "Users",
    url: "/users",

    icon: "icon-user",
    class: "mt-auto",
    variant: "info"
  },
  {
    name: 'About',
    url: '/about',
    icon: 'icon-user',
    variant: 'info',
  //  attributes: { target: '_blank', rel: 'noopener' }
  }
];
