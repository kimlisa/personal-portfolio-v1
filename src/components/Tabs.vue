<template>
  <div class="tabs">
    <nav>
      <button
        type="button"
        class="tabs__btn"
        :class="currentTabComponent === tools ? 'tabs__btn--active': ''"
        @click="currentTabComponent = tools"
      >Tools</button>
      <button
        type="button"
        class="tabs__btn"
        :class="currentTabComponent === role ? 'tabs__btn--active': ''"
        @click="currentTabComponent = role"
      >Role</button>
      <button
        type="button"
        class="tabs__btn"
        :class="currentTabComponent === repos ? 'tabs__btn--active': ''"
        @click="currentTabComponent = repos"
      >Repos</button>
    </nav>
    <component :is="currentTabComponent" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TabsHwscTools from '@/components/TabsHwscTools.vue';
import TabsHwscRepos from '@/components/TabsHwscRepos.vue';
import TabsHwscRole from '@/components/TabsHwscRole.vue';
import ProjectLinks from '@/components/ProjectLinks.vue';

@Component({
  components: {
    TabsHwscTools,
    TabsHwscRepos,
    TabsHwscRole,
    ProjectLinks,
  },
})
export default class Tabs extends Vue {
  currentTabComponent = TabsHwscTools;

  tools = TabsHwscTools;

  repos = TabsHwscRepos;

  role = TabsHwscRole;
}
</script>

<style lang="scss" scoped>
button {
  margin-right: 1em;
  background: transparent;
  border: none;
  border-radius: 0;
}
</style>
