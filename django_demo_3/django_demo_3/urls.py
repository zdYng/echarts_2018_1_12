"""django_demo_3 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from charts import views as charts_views
urlpatterns = [
    #### table #######
    url(r'^table_data_6/$',charts_views.table_data_6,name='table_data_6'),
    url(r'^table_data_5/$',charts_views.table_data_5,name='table_data_5'),
    url(r'^table_data_4/$',charts_views.table_data_4,name='table_data_4'),
    url(r'^table_data_3/$',charts_views.table_data_3,name='table_data_3'),
    url(r'^table_data_2/$',charts_views.table_data_2,name='table_data_2'),
    url(r'^table_data/$',charts_views.table_data,name='table_data'),
    #### mianji ######
    url(r'^mianji_update/$',charts_views.mianji_update,name='mianji_update'),
    url(r'^mianji_data/$',charts_views.mianji_data,name='mianji_data'),

    url(r'^mianji_update_2/$',charts_views.mianji_update_2,name='mianji_update_2'),
    url(r'^mianji_data_2/$',charts_views.mianji_data_2,name='mianji_data_2'),

    url(r'^mianji_update_3/$', charts_views.mianji_update_3, name='mianji_update_3'),
    url(r'^mianji_data_3/$', charts_views.mianji_data_3, name='mianji_data_3'),

    url(r'^mianji_update_4/$', charts_views.mianji_update_4, name='mianji_update_4'),
    url(r'^mianji_data_4/$', charts_views.mianji_data_4, name='mianji_data_4'),

    url(r'^mianji_update_5/$', charts_views.mianji_update_5, name='mianji_update_5'),
    url(r'^mianji_data_5/$', charts_views.mianji_data_5, name='mianji_data_5'),

    url(r'^mianji_update_6/$', charts_views.mianji_update_6, name='mianji_update_6'),
    url(r'^mianji_data_6/$', charts_views.mianji_data_6, name='mianji_data_6'),
#############其他图#############
    url(r'^guanxi_data/$',charts_views.guanxi_data,name='guanxi_data'),
    url(r'^leida_data/$',charts_views.leida_data,name='leida_data'),
    url(r'^scatter_data/$',charts_views.scatter_data,name='scatter_data'),
    ##### line chart ######
    url(r'^charts_10_update/$',charts_views.charts_10_update,name='charts_10_update'),
    url(r'^charts_10_datas/$',charts_views.charts_10_datas,name='charts_10_datas'),
    url(r'^charts_update_6/$',charts_views.charts_update_6,name='charts_update_6'),
    url(r'^charts_data_6/$',charts_views.charts_data_6,name='charts_data_6'),

    url(r'^charts_update_5/$',charts_views.charts_update_5,name='charts_update_5'),
    url(r'^charts_data_5/$',charts_views.charts_data_5,name='charts_data_5'),

    url(r'^charts_update_4/$',charts_views.charts_update_4,name='charts_update_4'),
    url(r'^charts_data_4/$',charts_views.charts_data_4,name='charts_data_4'),

    url(r'^charts_update_3/$',charts_views.charts_update_3,name='charts_update_3'),
    url(r'^charts_data_3/$',charts_views.charts_data_3,name='charts_data_3'),

    url(r'^charts_update_2/$',charts_views.charts_update_2,name='charts_update_2'),
    url(r'^charts_data_2/$',charts_views.charts_data_2,name='charts_data_2'),

    url(r'^charts_update/$',charts_views.charts_update,name='charts_update'),
    url(r'^charts_data/$',charts_views.charts_data,name='charts_data'),
    ##### 首页 ####
    # url(r'^$',charts_views.home,name='home'),
    url(r'^chart_2/$', charts_views.chart_2_2, name='chart_2'),
    url(r'^index/$',charts_views.index,name='index'),
    url(r'^admin/', admin.site.urls),
    url(r'^model_css/$',charts_views.model_css,name='model_css'),
    url(r'^login$',charts_views.login_view,name='login'),
    url(r'^logout',charts_views.logout_view),
    url(r'^register$',charts_views.register_view,name='register'),
    # 登录后url地址
    url(r'^page_chart/$',charts_views.page_chart,name='page_chart'),

]
from django.contrib.sitemaps import GenericSitemap
from django.contrib.sitemaps.views import sitemap

