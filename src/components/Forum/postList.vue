<template>
    <v-card
      max-width="1000"
      min-width="1000"
      class="mx-auto"
    >
      <v-toolbar
        color="teal"
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>ICCAC COVID Forum</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      
      <v-card>
        <v-card-title>
          {{ items.length }} COVID-19 Questions
          <v-select
            v-model="sortBy"
            :items="sortByChoices"
            prepend-icon="mdi-sort-variant"
            :menu-props="{ offsetY: true }"
            label="Sort By"
            single-line
            style="max-width: 200px; margin-left: 1rem;"
          ></v-select>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search Questions"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          hide-default-header
          :footer-props="footer_props"
          :sort-by.sync="sortBy"
        >
          <template v-slot:body="{ items }">
            <v-list dense>
              <v-list-item
                v-for="item in items"
                :key="item.name"
              >
              <v-list-item-avatar style="align-self: start">
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <span style="font-weight:bold; font-size: 1rem">
                    {{ item.name }}, {{ item.credentials }}
                    <span style="color: rgba(0,0,0,.6); font-size: 0.9rem; float: right">
                      {{ getFormattedDate(item.timestamp, 'MMM Do, YYYY h:mm:ssa') }}
                    </span>
                    <br>
                    {{ item.title }}, {{ item.institution }}
                  </span>
                  
                </v-list-item-title>
                {{ item.subtitle }}
                <v-list-item-subtitle></v-list-item-subtitle>
                <v-card-actions
                  dense
                  class="comment_actions"
                >
                  <div style="width: 75px">
                      <v-btn
                              text
                              icon
                              color="#8F8F8F"
                      >
                          <v-icon>
                              mdi-thumb-up
                          </v-icon>
                      </v-btn>
                      <span style="color: #8F8F8F"> <!-- v-if="comment.comment_likes.length" -->
                              5  <!-- [[ comment.comment_likes.length ]] -->
                      </span>
                  </div>
                  <v-btn text color="#8F8F8F">
                      Reply
                  </v-btn>
                  <v-btn text color="red">
                      Delete
                  </v-btn>
                </v-card-actions>
                <v-list-group
                  v-if="item.replies.length"
                  sub-group
                  v-model="item.active"
                >
                  <template v-slot:activator>
                    <v-list-item-action style="color:blue">
                      <span>
                        {{ viewOrHideText(item.active) }} {{ item.replies.length }}
                        {{ replyText(item.replies.length) }}
                      </span>
                    </v-list-item-action>
                  </template>
                  <v-list-item
                    v-for="subItem in item.replies"
                    :key="subItem.title"
                    no-action
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="subItem.title"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
            </v-list-group>
              </v-list-item-content>
        </v-list-item>
      </v-list>
          </template>
        
        </v-data-table>
      </v-card>
    </v-card>
</template>

<script>
export default {
  data () {
    return { 
      sortBy: "-timestamp",
      sortByChoices: [
        {text: 'Top Comments', value: 'subtitle'},
        {text: 'Newest first', value: '-timestamp'},
      ],
      footer_props: {
        "items-per-page-options": [20, 50, -1],
        "items-per-page-text": "Questions per page",
      },
      search: '',
      headers: [
        {text: 'Name', value: 'name'},
        {text: 'Subtitle', value: 'subtitle'},
        {text: 'Timestamp', value: 'timestamp'},
      ],
      items: [
        {
          action: 'local_activity',
          name: 'Joe Schmoe',
          credentials: 'RN',
          title: 'VAD Coordinator',
          institution: 'Mayo Clinic',
          replies: [
            { title: 'List Item' },
          ],
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          timestamp: new Date(new Date().getTime() - 1000000000).getTime()
        },
        {
          action: 'restaurant',
          name: 'Chad Jethrow',
          credentials: 'PA-C',
          title: 'VAD Perfusionist',
          institution: 'John Hopkins',
          replies: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' },
          ],
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          subtitle: 'my message2',
          timestamp: new Date(new Date().getTime() - 2000000000).getTime()
        },
        {
          action: 'school',
          name: 'Tami Fredrick',
          credentials: 'Ph. D',
          title: 'Researcher',
          institution: 'Medical College of Wisconsin',
          replies: [
          //   { title: 'List Item' },
          ],
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          subtitle: 'my message 3',
          timestamp: new Date(new Date().getTime() - 34000000000).getTime()
        },
        {
          action: 'directions_run',
          name: 'Susanna Hofmeister',
          credentials: 'RN',
          title: 'VAD Coordinator',
          institution: 'Mayo Clinic',
          replies: [
            { title: 'List Item' },
          ],
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          subtitle: 'my message 4',
          timestamp: new Date(new Date().getTime() - 6000000000).getTime()
        },
        {
          action: 'healing',
          name: 'Hanna Jenkins',
          credentials: 'MBA',
          title: 'VAD Manager',
          institution: 'Olmsted',
          replies: [
            { title: 'List Item' },
          ],
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          subtitle: 'my msg 5',
          timestamp: new Date(new Date().getTime() - 7000000000).getTime()
        },
      ],
    }
  }, // data
  methods: {
    replyText(replies) {
      if (replies == 1) {
        return "reply";
      }
      else {
        return "replies";
      }
    },
    viewOrHideText(active) {
      if (active) {
        return "Hide";
      }
      else {
        return "View";
      }
    },
    getFormattedDate(timestamp, format) {
      console.log(timestamp+format)
      //return moment(timestamp).format(format) + " CDT";
    }
  },
}
</script>