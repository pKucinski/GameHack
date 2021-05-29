from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class SignUpForm(UserCreationForm):
    programming = forms.IntegerField(widget=forms.HiddenInput())
    language = forms.IntegerField(widget=forms.HiddenInput())
    os = forms.IntegerField(widget=forms.HiddenInput())
    renown = forms.IntegerField(widget=forms.HiddenInput())

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')

    def __init__(self, *args, **kwargs):
        super(SignUpForm, self).__init__(*args, **kwargs)
        self.fields['programming'].initial = 0
        self.fields['language'].initial = 0
        self.fields['os'].initial = 0
        self.fields['renown'].initial = 0