# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals

from django.db import models

class SfhdPredictDataTest(models.Model):
    e91ge01ap_av = models.FloatField(db_column='E91GE01AP_AV', blank=True, null=True)
    time = models.BigIntegerField(primary_key=True)
    t1amtp_av = models.FloatField(db_column='T1AMTP_AV', blank=True, null=True)
    b01te01a_av= models.FloatField(db_column='B01TE01A_AV', blank=True, null=True)
    am53sig7001_av = models.FloatField(db_column='AM53SIG7001_AV',blank=True,null=True)
    am52sig1001_av = models.FloatField(db_column='AM52SIG1001_AV',blank=True,null=True)
    class Meta:
        managed = False
        db_table = 'sfhd_predict_data_test'

class Sfhd130Cols(models.Model):
    amb05cq04bm_av = models.FloatField(db_column='AMB05CQ04BM_AV', blank=True, null=True)  # Field name made lowercase.锅炉省煤器出口烟气含氧量（右侧）
    o2ref_av = models.FloatField(db_column='O2REF_AV', blank=True, null=True)  # Field name made lowercase.
    am22mcs0103_av = models.FloatField(db_column='AM22MCS0103_AV', blank=True, null=True)  # Field name made lowercase.
    amb01ft01b_av = models.FloatField(db_column='AMB01FT01B_AV', blank=True, null=True)  # Field name made lowercase.
    b06lt02ba_av = models.FloatField(db_column='B06LT02BA_AV', blank=True, null=True)  # Field name made lowercase.
    t58te01a_av = models.FloatField(db_column='T58TE01A_AV', blank=True, null=True)  # Field name made lowercase.
    amb03p204fsp2_av = models.FloatField(db_column='AMB03P204FSP2_AV', blank=True, null=True)  # Field name made lowercase.
    amb03cv03e02_av = models.FloatField(db_column='AMB03CV03E02_AV', blank=True, null=True)  # Field name made lowercase.
    amb02pt03a_av = models.FloatField(db_column='AMB02PT03A_AV', blank=True, null=True)  # Field name made lowercase.
    amb01te01m_av = models.FloatField(db_column='AMB01TE01M_AV', blank=True, null=True)  # Field name made lowercase.
    am22mcs0304a_av = models.FloatField(db_column='AM22MCS0304A_AV', blank=True, null=True)  # Field name made lowercase.
    t50cv03te1_av = models.FloatField(db_column='T50CV03TE1_AV', blank=True, null=True)  # Field name made lowercase.
    b05v12acco_av = models.FloatField(db_column='B05V12ACCO_AV', blank=True, null=True)  # Field name made lowercase.
    amb06pt13bm_av = models.FloatField(db_column='AMB06PT13BM_AV', blank=True, null=True)  # Field name made lowercase.
    b01te01a_av = models.FloatField(db_column='B01TE01A_AV', blank=True, null=True)  # Field name made lowercase.
    am24sig0209_av = models.FloatField(db_column='AM24SIG0209_AV', blank=True, null=True)  # Field name made lowercase.
    t31pt04b_av = models.FloatField(db_column='T31PT04B_AV', blank=True, null=True)  # Field name made lowercase.
    amb03p204asp1_av = models.FloatField(db_column='AMB03P204ASP1_AV', blank=True, null=True)  # Field name made lowercase.
    b05te12ab_av = models.FloatField(db_column='B05TE12AB_AV', blank=True, null=True)  # Field name made lowercase.
    b14te05a_av = models.FloatField(db_column='B14TE05A_AV', blank=True, null=True)  # Field name made lowercase.
    e92vr01pv01_av = models.FloatField(db_column='E92VR01PV01_AV', blank=True, null=True)  # Field name made lowercase.
    b01te01c_av = models.FloatField(db_column='B01TE01C_AV', blank=True, null=True)  # Field name made lowercase.
    b06ft12aa_av = models.FloatField(db_column='B06FT12AA_AV', blank=True, null=True)  # Field name made lowercase.
    amb05cq05am_av = models.FloatField(db_column='AMB05CQ05AM_AV', blank=True, null=True)  # Field name made lowercase.
    b07te01aa_av = models.FloatField(db_column='B07TE01AA_AV', blank=True, null=True)  # Field name made lowercase.
    b06ft12ba_av = models.FloatField(db_column='B06FT12BA_AV', blank=True, null=True)  # Field name made lowercase.
    am52sig1001_av = models.FloatField(db_column='AM52SIG1001_AV', blank=True, null=True)  # Field name made lowercase.
    b14te08a_av = models.FloatField(db_column='B14TE08A_AV', blank=True, null=True)  # Field name made lowercase.
    t1amrstmtmp_av = models.FloatField(db_column='T1AMRSTMTMP_AV', blank=True, null=True)  # Field name made lowercase.
    b05v12aczt_av = models.FloatField(db_column='B05V12ACZT_AV', blank=True, null=True)  # Field name made lowercase.
    am24sig0304_av = models.FloatField(db_column='AM24SIG0304_AV', blank=True, null=True)  # Field name made lowercase.
    amb03p204bsp2_av = models.FloatField(db_column='AMB03P204BSP2_AV', blank=True, null=True)  # Field name made lowercase.
    b06lt02bb_av = models.FloatField(db_column='B06LT02BB_AV', blank=True, null=True)  # Field name made lowercase.
    am24sig0309_av = models.FloatField(db_column='AM24SIG0309_AV', blank=True, null=True)  # Field name made lowercase.
    amb03p204fsp1_av = models.FloatField(db_column='AMB03P204FSP1_AV', blank=True, null=True)  # Field name made lowercase.
    amb06te21bm_av = models.FloatField(db_column='AMB06TE21BM_AV', blank=True, null=True)  # Field name made lowercase.
    b06te21ba_av = models.FloatField(db_column='B06TE21BA_AV', blank=True, null=True)  # Field name made lowercase.
    amb05cq04av_av = models.FloatField(db_column='AMB05CQ04AV_AV', blank=True, null=True)  # Field name made lowercase.
    b05v12adzt_av = models.FloatField(db_column='B05V12ADZT_AV', blank=True, null=True)  # Field name made lowercase.
    e92qb01terb_av = models.FloatField(db_column='E92QB01TERB_AV', blank=True, null=True)  # Field name made lowercase.
    amb06pt13am_av = models.FloatField(db_column='AMB06PT13AM_AV', blank=True, null=True)  # Field name made lowercase.
    amb01ft01c_av = models.FloatField(db_column='AMB01FT01C_AV', blank=True, null=True)  # Field name made lowercase.
    amb03p204dsp2_av = models.FloatField(db_column='AMB03P204DSP2_AV', blank=True, null=True)  # Field name made lowercase.
    am23sig0206_av = models.FloatField(db_column='AM23SIG0206_AV', blank=True, null=True)  # Field name made lowercase.
    b05cq04bia_av = models.FloatField(db_column='B05CQ04BIA_AV', blank=True, null=True)  # Field name made lowercase.
    am24sig0210_av = models.FloatField(db_column='AM24SIG0210_AV', blank=True, null=True)  # Field name made lowercase.
    b03m02baft_av = models.FloatField(db_column='B03M02BAFT_AV', blank=True, null=True)  # Field name made lowercase.
    b05pt01a_av = models.FloatField(db_column='B05PT01A_AV', blank=True, null=True)  # Field name made lowercase.
    amb03p204asp2_av = models.FloatField(db_column='AMB03P204ASP2_AV', blank=True, null=True)  # Field name made lowercase.
    b01ft01c_av = models.FloatField(db_column='B01FT01C_AV', blank=True, null=True)  # Field name made lowercase.
    b07st03aa_av = models.FloatField(db_column='B07ST03AA_AV', blank=True, null=True)  # Field name made lowercase.
    b05v12aazt_av = models.FloatField(db_column='B05V12AAZT_AV', blank=True, null=True)  # Field name made lowercase.
    amb05cq04am_av = models.FloatField(db_column='AMB05CQ04AM_AV', blank=True, null=True)  # Field name made lowercase.
    am24sig0303_av = models.FloatField(db_column='AM24SIG0303_AV', blank=True, null=True)  # Field name made lowercase.
    b05m01bte_av = models.FloatField(db_column='B05M01BTE_AV', blank=True, null=True)  # Field name made lowercase.
    t40pt02a_av = models.FloatField(db_column='T40PT02A_AV', blank=True, null=True)  # Field name made lowercase.
    am24sig0307_av = models.FloatField(db_column='AM24SIG0307_AV', blank=True, null=True)  # Field name made lowercase.
    am17ccs06a701_av = models.FloatField(db_column='AM17CCS06A701_AV', blank=True, null=True)  # Field name made lowercase.
    amb02pt23am_av = models.FloatField(db_column='AMB02PT23AM_AV', blank=True, null=True)  # Field name made lowercase.
    e91ge01ap_av = models.FloatField(db_column='E91GE01AP_AV', blank=True, null=True)  # Field name made lowercase.
    b14te07a_av = models.FloatField(db_column='B14TE07A_AV', blank=True, null=True)  # Field name made lowercase.
    b14te04a_av = models.FloatField(db_column='B14TE04A_AV', blank=True, null=True)  # Field name made lowercase.
    b26dehi004_av = models.FloatField(db_column='B26DEHI004_AV', blank=True, null=True)  # Field name made lowercase.
    b05te12aa_av = models.FloatField(db_column='B05TE12AA_AV', blank=True, null=True)  # Field name made lowercase.
    amb05pt01bia_av = models.FloatField(db_column='AMB05PT01BIA_AV', blank=True, null=True)  # Field name made lowercase.
    amb06ft31ba_av = models.FloatField(db_column='AMB06FT31BA_AV', blank=True, null=True)  # Field name made lowercase.
    amb06ft31bb_av = models.FloatField(db_column='AMB06FT31BB_AV', blank=True, null=True)  # Field name made lowercase.
    b06lt02ab_av = models.FloatField(db_column='B06LT02AB_AV', blank=True, null=True)  # Field name made lowercase.
    amb03p204csp1_av = models.FloatField(db_column='AMB03P204CSP1_AV', blank=True, null=True)  # Field name made lowercase.
    b05v12abzt_av = models.FloatField(db_column='B05V12ABZT_AV', blank=True, null=True)  # Field name made lowercase.
    am22mcs0102_av = models.FloatField(db_column='AM22MCS0102_AV', blank=True, null=True)  # Field name made lowercase.
    e92qb01tera_av = models.FloatField(db_column='E92QB01TERA_AV', blank=True, null=True)  # Field name made lowercase.
    am53sig7001_av = models.FloatField(db_column='AM53SIG7001_AV', blank=True, null=True)  # Field name made lowercase.
    amb05pt01pv_av = models.FloatField(db_column='AMB05PT01PV_AV', blank=True, null=True)  # Field name made lowercase.
    b03m02eaft_av = models.FloatField(db_column='B03M02EAFT_AV', blank=True, null=True)  # Field name made lowercase.
    amb06ft31ab_av = models.FloatField(db_column='AMB06FT31AB_AV', blank=True, null=True)  # Field name made lowercase.
    e92qb01terc_av = models.FloatField(db_column='E92QB01TERC_AV', blank=True, null=True)  # Field name made lowercase.
    amb05sp01a_av = models.FloatField(db_column='AMB05SP01A_AV', blank=True, null=True)  # Field name made lowercase.
    amsig0301_av = models.FloatField(db_column='AMSIG0301_AV', blank=True, null=True)  # Field name made lowercase.
    e92qb01it_av = models.FloatField(db_column='E92QB01IT_AV', blank=True, null=True)  # Field name made lowercase.
    b03m02caft_av = models.FloatField(db_column='B03M02CAFT_AV', blank=True, null=True)  # Field name made lowercase.
    amb03p204dsp1_av = models.FloatField(db_column='AMB03P204DSP1_AV', blank=True, null=True)  # Field name made lowercase.
    b03m02faft_av = models.FloatField(db_column='B03M02FAFT_AV', blank=True, null=True)  # Field name made lowercase.
    b07ft10aao_av = models.FloatField(db_column='B07FT10AAO_AV', blank=True, null=True)  # Field name made lowercase.
    am17ccs02a105_av = models.FloatField(db_column='AM17CCS02A105_AV', blank=True, null=True)  # Field name made lowercase.
    am23sig0204_av = models.FloatField(db_column='AM23SIG0204_AV', blank=True, null=True)  # Field name made lowercase.
    e92vr01it01_av = models.FloatField(db_column='E92VR01IT01_AV', blank=True, null=True)  # Field name made lowercase.
    amb01pt31m_av = models.FloatField(db_column='AMB01PT31M_AV', blank=True, null=True)  # Field name made lowercase.
    b07ft10bo_av = models.FloatField(db_column='B07FT10BO_AV', blank=True, null=True)  # Field name made lowercase.
    t1amtp_av = models.FloatField(db_column='T1AMTP_AV', blank=True, null=True)  # Field name made lowercase.
    am24sig0305_av = models.FloatField(db_column='AM24SIG0305_AV', blank=True, null=True)  # Field name made lowercase.
    t50cv04te1_av = models.FloatField(db_column='T50CV04TE1_AV', blank=True, null=True)  # Field name made lowercase.
    b03m02daft_av = models.FloatField(db_column='B03M02DAFT_AV', blank=True, null=True)  # Field name made lowercase.
    t50cv03te2_av = models.FloatField(db_column='T50CV03TE2_AV', blank=True, null=True)  # Field name made lowercase.
    am17ccs02a102_av = models.FloatField(db_column='AM17CCS02A102_AV', blank=True, null=True)  # Field name made lowercase.
    amb03p204bsp1_av = models.FloatField(db_column='AMB03P204BSP1_AV', blank=True, null=True)  # Field name made lowercase.
    amb03p204csp2_av = models.FloatField(db_column='AMB03P204CSP2_AV', blank=True, null=True)  # Field name made lowercase.
    b14te06a_av = models.FloatField(db_column='B14TE06A_AV', blank=True, null=True)  # Field name made lowercase.
    b01ft01b_av = models.FloatField(db_column='B01FT01B_AV', blank=True, null=True)  # Field name made lowercase.
    b01te01b_av = models.FloatField(db_column='B01TE01B_AV', blank=True, null=True)  # Field name made lowercase.
    b05v12abco_av = models.FloatField(db_column='B05V12ABCO_AV', blank=True, null=True)  # Field name made lowercase.
    e92qb01ap_av = models.FloatField(db_column='E92QB01AP_AV', blank=True, null=True)  # Field name made lowercase.
    am23sig0202_av = models.FloatField(db_column='AM23SIG0202_AV', blank=True, null=True)  # Field name made lowercase.
    am24sig0211_av = models.FloatField(db_column='AM24SIG0211_AV', blank=True, null=True)  # Field name made lowercase.
    time = models.BigIntegerField(primary_key=True)
    b07te11aa_av = models.FloatField(db_column='B07TE11AA_AV', blank=True, null=True)  # Field name made lowercase.
    amb06ft12bm_av = models.FloatField(db_column='AMB06FT12BM_AV', blank=True, null=True)  # Field name made lowercase.
    amb03p204esp1_av = models.FloatField(db_column='AMB03P204ESP1_AV', blank=True, null=True)  # Field name made lowercase.
    amb01ft01m_av = models.FloatField(db_column='AMB01FT01M_AV', blank=True, null=True)  # Field name made lowercase.
    b05v12adco_av = models.FloatField(db_column='B05V12ADCO_AV', blank=True, null=True)  # Field name made lowercase.
    amb06ft05a_av = models.FloatField(db_column='AMB06FT05A_AV', blank=True, null=True)  # Field name made lowercase.
    amb06ft12am_av = models.FloatField(db_column='AMB06FT12AM_AV', blank=True, null=True)  # Field name made lowercase.
    am23sig0205_av = models.FloatField(db_column='AM23SIG0205_AV', blank=True, null=True)  # Field name made lowercase.
    amb06te21am_av = models.FloatField(db_column='AMB06TE21AM_AV', blank=True, null=True)  # Field name made lowercase.
    am24sig0306_av = models.FloatField(db_column='AM24SIG0306_AV', blank=True, null=True)  # Field name made lowercase.
    am17ccs06a506_av = models.FloatField(db_column='AM17CCS06A506_AV', blank=True, null=True)  # Field name made lowercase.
    amb05m01fm_av = models.FloatField(db_column='AMB05M01FM_AV', blank=True, null=True)  # Field name made lowercase.
    b03m02aaft_av = models.FloatField(db_column='B03M02AAFT_AV', blank=True, null=True)  # Field name made lowercase.
    b07te11ba_av = models.FloatField(db_column='B07TE11BA_AV', blank=True, null=True)  # Field name made lowercase.
    am23sig0203_av = models.FloatField(db_column='AM23SIG0203_AV', blank=True, null=True)  # Field name made lowercase.
    t1amibkfrstgp_av = models.FloatField(db_column='T1AMIBKFRSTGP_AV', blank=True, null=True)  # Field name made lowercase.
    b01ft01a_av = models.FloatField(db_column='B01FT01A_AV', blank=True, null=True)  # Field name made lowercase.
    b06te21aa_av = models.FloatField(db_column='B06TE21AA_AV', blank=True, null=True)  # Field name made lowercase.
    am17ccs06a504_av = models.FloatField(db_column='AM17CCS06A504_AV', blank=True, null=True)  # Field name made lowercase.
    amb01ft01a_av = models.FloatField(db_column='AMB01FT01A_AV', blank=True, null=True)  # Field name made lowercase.
    e91ge01rp_av = models.FloatField(db_column='E91GE01RP_AV', blank=True, null=True)  # Field name made lowercase.
    am17ccs01a01_av = models.FloatField(db_column='AM17CCS01A01_AV', blank=True, null=True)  # Field name made lowercase.
    b06lt02aa_av = models.FloatField(db_column='B06LT02AA_AV', blank=True, null=True)  # Field name made lowercase.
    t50cv04te2_av = models.FloatField(db_column='T50CV04TE2_AV', blank=True, null=True)  # Field name made lowercase.
    amb06ft31aa_av = models.FloatField(db_column='AMB06FT31AA_AV', blank=True, null=True)  # Field name made lowercase.
    b05v12aaco_av = models.FloatField(db_column='B05V12AACO_AV', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'SFHD_130Cols'

    # def __float__(self):
    #     return self.time


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'
