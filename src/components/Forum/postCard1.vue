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

          <script>
          
          </script>
          <style>
          </style>