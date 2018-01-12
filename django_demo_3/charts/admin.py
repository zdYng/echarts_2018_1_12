from django.contrib import admin
from charts.models import Sfhd130Cols,SfhdPredictDataTest
# Register your models here.
@admin.register(Sfhd130Cols)
class Sfhd130ColsAdmin(admin.ModelAdmin):
    list_display = ('time','amb05cq04bm_av','o2ref_av','am22mcs0103_av')
@admin.register(SfhdPredictDataTest)
class SfhdPredictDataTestAdmin(admin.ModelAdmin):
    list_display = ('time','e91ge01ap_av','t1amtp_av','b01te01a_av', 'am53sig7001_av','am52sig1001_av')

class MyModelAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super(MyModelAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs
        else:
            return qs.filter(author=request.user)

admin.AdminSite.site_header = 'Sfhd'
admin.AdminSite.site_title = 'Sfhd_chart'