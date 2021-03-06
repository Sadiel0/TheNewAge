"""empty message

Revision ID: b4b449c6f1d3
Revises: 1d904d0bd826
Create Date: 2022-01-21 00:46:50.689996

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b4b449c6f1d3'
down_revision = '1d904d0bd826'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('nfts', sa.Column('nft_id', sa.String(length=200), nullable=False))
    op.create_unique_constraint(None, 'nfts', ['nft_id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'nfts', type_='unique')
    op.drop_column('nfts', 'nft_id')
    # ### end Alembic commands ###
