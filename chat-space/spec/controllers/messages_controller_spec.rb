require 'rails_helper'

describe MessagesController do
<<<<<<< HEAD
  let(:group) { create(:group) }
  let(:user) { create(:user) }

  describe '#index' do

    context 'log in' do
      before do
        get :index, params: { group_id: group.id }
=======
  let(:group) { create(:group)}
  let(:user) {create(:user)}

  describe '#index' do

    context 'loh in' do
      before do
        login user
        get :index, params: {group_id: group.id}
>>>>>>> origin/master
      end

      it 'assigns @message' do
        expect(assigns(:message)).to be_a_new(Message)
      end

<<<<<<< HEAD
      it 'assigns @message' do
        expect(assigns(:group)).to eq group
      end

      it 'renders index' do
        expect(response).to render_template :index
=======
      it 'assigns @group' do
        expect(assigns(:group)).to eq group
      end

      it 'redners index' do
        expect(response).to render_templete :index
>>>>>>> origin/master
      end
    end

    context 'not log in' do
      before do
<<<<<<< HEAD
        get :index, params: { group_id: group.id }
      end

      it 'redirects to new_user_session_path' do
=======
        get :index, params: {group_id: group.id}
      end

      it 'renders to new_user_session_path' do
>>>>>>> origin/master
        expect(response).to redirect_to(new_user_session_path)
      end
    end
  end

  describe '#create' do
    let(:params) { { group_id: group.id, user_id: user.id, message: attributes_for(:message) } }

    context 'log in' do
      before do
        login user
      end

      context 'can save' do
        subject {
          post :create,
          params: params
        }

        it 'count up message' do
          expect{ subject }.to change(Message, :count).by(1)
        end

        it 'redirects to group_messages_path' do
          subject
          expect(response).to redirect_to(group_messages_path(group))
        end
      end

      context 'can not save' do
        let(:invalid_params) { { group_id: group.id, user_id: user.id, message: attributes_for(:message, content: nil, image: nil) } }

        subject {
          post :create,
          params: invalid_params
        }

        it 'does not count up' do
          expect{ subject }.not_to change(Message, :count)
        end

        it 'renders index' do
          subject
          expect(response).to render_template :index
        end
      end
    end

    context 'not log in' do

      it 'redirects to new_user_session_path' do
        post :create, params: params
        expect(response).to redirect_to(new_user_session_path)
      end
    end
  end
end












<<<<<<< HEAD
=======











>>>>>>> origin/master
