import{_ as s,c as n,o as a,a as l}from"./app.9848e2c1.js";const u=JSON.parse('{"title":"git\u57FA\u7840\u77E5\u8BC6","description":"","frontmatter":{},"headers":[{"level":2,"title":"1\uFF1A\u4ED3\u5E93","slug":"_1\uFF1A\u4ED3\u5E93"},{"level":2,"title":"2\uFF1A\u914D\u7F6E","slug":"_2\uFF1A\u914D\u7F6E"},{"level":2,"title":"3\uFF1A\u589E\u52A0/\u5220\u9664\u6587\u4EF6","slug":"_3\uFF1A\u589E\u52A0-\u5220\u9664\u6587\u4EF6"},{"level":2,"title":"4\uFF1A\u4EE3\u7801\u63D0\u4EA4","slug":"_4\uFF1A\u4EE3\u7801\u63D0\u4EA4"},{"level":2,"title":"5\uFF1A\u5206\u652F","slug":"_5\uFF1A\u5206\u652F"},{"level":2,"title":"6\uFF1A\u6807\u7B7E","slug":"_6\uFF1A\u6807\u7B7E"},{"level":2,"title":"7\uFF1A\u67E5\u770B\u4FE1\u606F","slug":"_7\uFF1A\u67E5\u770B\u4FE1\u606F"},{"level":2,"title":"8\uFF1A\u8FDC\u7A0B\u540C\u6B65","slug":"_8\uFF1A\u8FDC\u7A0B\u540C\u6B65"}],"relativePath":"deployment/git\u57FA\u7840.md","lastUpdated":1660486766000}'),p={name:"deployment/git\u57FA\u7840.md"},e=l(`<h1 id="git\u57FA\u7840\u77E5\u8BC6" tabindex="-1">git\u57FA\u7840\u77E5\u8BC6 <a class="header-anchor" href="#git\u57FA\u7840\u77E5\u8BC6" aria-hidden="true">#</a></h1><h2 id="_1\uFF1A\u4ED3\u5E93" tabindex="-1">1\uFF1A\u4ED3\u5E93 <a class="header-anchor" href="#_1\uFF1A\u4ED3\u5E93" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  # \u5728\u5F53\u524D\u76EE\u5F55\u65B0\u5EFA\u4E00\u4E2AGit\u4EE3\u7801\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git init</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u65B0\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u5C06\u5176\u521D\u59CB\u5316\u4E3AGit\u4EE3\u7801\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git init [project-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u4E0B\u8F7D\u4E00\u4E2A\u9879\u76EE\u548C\u5B83\u7684\u6574\u4E2A\u4EE3\u7801\u5386\u53F2</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git clone [url]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_2\uFF1A\u914D\u7F6E" tabindex="-1">2\uFF1A\u914D\u7F6E <a class="header-anchor" href="#_2\uFF1A\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  # \u663E\u793A\u5F53\u524D\u7684Git\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git config --list</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u7F16\u8F91Git\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git config -e [--global]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u8BBE\u7F6E\u63D0\u4EA4\u4EE3\u7801\u65F6\u7684\u7528\u6237\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git config [--global] user.name &quot;[name]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git config [--global] user.email &quot;[email address]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_3\uFF1A\u589E\u52A0-\u5220\u9664\u6587\u4EF6" tabindex="-1">3\uFF1A\u589E\u52A0/\u5220\u9664\u6587\u4EF6 <a class="header-anchor" href="#_3\uFF1A\u589E\u52A0-\u5220\u9664\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  # \u6DFB\u52A0\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git add [file1] [file2] ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u6DFB\u52A0\u6307\u5B9A\u76EE\u5F55\u5230\u6682\u5B58\u533A\uFF0C\u5305\u62EC\u5B50\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git add [dir]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u6DFB\u52A0\u5F53\u524D\u76EE\u5F55\u7684\u6240\u6709\u6587\u4EF6\u5230\u6682\u5B58\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git add .</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u6DFB\u52A0\u6BCF\u4E2A\u53D8\u5316\u524D\uFF0C\u90FD\u4F1A\u8981\u6C42\u786E\u8BA4</span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u5BF9\u4E8E\u540C\u4E00\u4E2A\u6587\u4EF6\u7684\u591A\u5904\u53D8\u5316\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5206\u6B21\u63D0\u4EA4</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git add -p</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u5220\u9664\u5DE5\u4F5C\u533A\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u8FD9\u6B21\u5220\u9664\u653E\u5165\u6682\u5B58\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git rm [file1] [file2] ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u505C\u6B62\u8FFD\u8E2A\u6307\u5B9A\u6587\u4EF6\uFF0C\u4F46\u8BE5\u6587\u4EF6\u4F1A\u4FDD\u7559\u5728\u5DE5\u4F5C\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git rm --cached [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u6539\u540D\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u8FD9\u4E2A\u6539\u540D\u653E\u5165\u6682\u5B58\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git mv [file-original] [file-renamed]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="_4\uFF1A\u4EE3\u7801\u63D0\u4EA4" tabindex="-1">4\uFF1A\u4EE3\u7801\u63D0\u4EA4 <a class="header-anchor" href="#_4\uFF1A\u4EE3\u7801\u63D0\u4EA4" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  # \u63D0\u4EA4\u6682\u5B58\u533A\u5230\u4ED3\u5E93\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git commit -m [message]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u63D0\u4EA4\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u4ED3\u5E93\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git commit [file1] [file2] ... -m [message]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u63D0\u4EA4\u5DE5\u4F5C\u533A\u81EA\u4E0A\u6B21commit\u4E4B\u540E\u7684\u53D8\u5316\uFF0C\u76F4\u63A5\u5230\u4ED3\u5E93\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git commit -a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u63D0\u4EA4\u65F6\u663E\u793A\u6240\u6709diff\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git commit -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u4F7F\u7528\u4E00\u6B21\u65B0\u7684commit\uFF0C\u66FF\u4EE3\u4E0A\u4E00\u6B21\u63D0\u4EA4</span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u5982\u679C\u4EE3\u7801\u6CA1\u6709\u4EFB\u4F55\u65B0\u53D8\u5316\uFF0C\u5219\u7528\u6765\u6539\u5199\u4E0A\u4E00\u6B21commit\u7684\u63D0\u4EA4\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git commit --amend -m [message]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u91CD\u505A\u4E0A\u4E00\u6B21commit\uFF0C\u5E76\u5305\u62EC\u6307\u5B9A\u6587\u4EF6\u7684\u65B0\u53D8\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git commit --amend [file1] [file2] ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="_5\uFF1A\u5206\u652F" tabindex="-1">5\uFF1A\u5206\u652F <a class="header-anchor" href="#_5\uFF1A\u5206\u652F" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  # \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git branch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u5217\u51FA\u6240\u6709\u8FDC\u7A0B\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git branch -r</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git branch -a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4F46\u4F9D\u7136\u505C\u7559\u5728\u5F53\u524D\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git branch [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230\u8BE5\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git checkout -b [branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u6307\u5B9Acommit</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git branch [branch] [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git branch --track [branch] [remote-branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u5207\u6362\u5230\u6307\u5B9A\u5206\u652F\uFF0C\u5E76\u66F4\u65B0\u5DE5\u4F5C\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git checkout [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u5207\u6362\u5230\u4E0A\u4E00\u4E2A\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git checkout -</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB\uFF0C\u5728\u73B0\u6709\u5206\u652F\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u4E4B\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git branch --set-upstream [branch] [remote-branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u5408\u5E76\u6307\u5B9A\u5206\u652F\u5230\u5F53\u524D\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git merge [branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u9009\u62E9\u4E00\u4E2Acommit\uFF0C\u5408\u5E76\u8FDB\u5F53\u524D\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git cherry-pick [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u5220\u9664\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git branch -d [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git push origin --delete [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git branch -dr [remote/branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="_6\uFF1A\u6807\u7B7E" tabindex="-1">6\uFF1A\u6807\u7B7E <a class="header-anchor" href="#_6\uFF1A\u6807\u7B7E" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  # \u5217\u51FA\u6240\u6709tag</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git tag</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u65B0\u5EFA\u4E00\u4E2Atag\u5728\u5F53\u524Dcommit</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git tag [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u65B0\u5EFA\u4E00\u4E2Atag\u5728\u6307\u5B9Acommit</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git tag [tag] [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u5220\u9664\u672C\u5730tag</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git tag -d [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u5220\u9664\u8FDC\u7A0Btag</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git push origin :refs/tags/[tagName]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u67E5\u770Btag\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git show [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u63D0\u4EA4\u6307\u5B9Atag</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git push [remote] [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u63D0\u4EA4\u6240\u6709tag</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git push [remote] --tags</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u67D0\u4E2Atag</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git checkout -b [branch] [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="_7\uFF1A\u67E5\u770B\u4FE1\u606F" tabindex="-1">7\uFF1A\u67E5\u770B\u4FE1\u606F <a class="header-anchor" href="#_7\uFF1A\u67E5\u770B\u4FE1\u606F" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  # \u663E\u793A\u6709\u53D8\u66F4\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git status</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u7248\u672C\u5386\u53F2</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git log</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u663E\u793Acommit\u5386\u53F2\uFF0C\u4EE5\u53CA\u6BCF\u6B21commit\u53D1\u751F\u53D8\u66F4\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git log --stat</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u663E\u793A\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u7684\u5DEE\u5F02</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git diff</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u663E\u793A\u6682\u5B58\u533A\u548C\u4E0A\u4E00\u4E2Acommit\u7684\u5DEE\u5F02</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git diff --cached [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u6700\u8FD1\u51E0\u6B21\u63D0\u4EA4</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git reflog</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_8\uFF1A\u8FDC\u7A0B\u540C\u6B65" tabindex="-1">8\uFF1A\u8FDC\u7A0B\u540C\u6B65 <a class="header-anchor" href="#_8\uFF1A\u8FDC\u7A0B\u540C\u6B65" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  # \u4E0B\u8F7D\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6240\u6709\u53D8\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git fetch [remote]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u663E\u793A\u6240\u6709\u8FDC\u7A0B\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git remote -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u663E\u793A\u67D0\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u7684\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git remote show [remote]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5E76\u547D\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git remote add [shortname] [url]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u53D6\u56DE\u8FDC\u7A0B\u4ED3\u5E93\u7684\u53D8\u5316\uFF0C\u5E76\u4E0E\u672C\u5730\u5206\u652F\u5408\u5E76</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git pull [remote] [branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u4E0A\u4F20\u672C\u5730\u6307\u5B9A\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git push [remote] [branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u5F3A\u884C\u63A8\u9001\u5F53\u524D\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5373\u4F7F\u6709\u51B2\u7A81</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git push [remote] --force</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # \u63A8\u9001\u6240\u6709\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ git push [remote] --all</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,17),r=[e];function c(i,o,t,b,A,C){return a(),n("div",null,r)}var y=s(p,[["render",c]]);export{u as __pageData,y as default};
