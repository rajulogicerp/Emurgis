import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import { appRoutes } from './group-config'

import '/imports/ui/components/profile/userProfile'

appRoutes.route('/profile/:userId', {
    action: () => {
        BlazeLayout.render('layout', {
          main: 'userProfile',
          footer: 'footer',
          header: 'header',
          sidebar: 'sidebar'
        })
    },
    name: 'profile'
})
